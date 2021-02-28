import React, { useRef, useEffect, Component } from "react";
import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";
// OLD MODEL
//import * as facemesh from "@tensorflow-models/facemesh";

// NEW MODEL
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import * as blazeface from "@tensorflow-models/blazeface";
import Webcam from "react-webcam";
import axios from "axios";
// import { drawMesh } from "../utilities";

class opencamera extends Component {
  emotion_labels = [
    "angry",
    "disgust",
    "fear",
    "happy",
    "sad",
    "surprise",
    "neutral",
  ];
  emotion_colors = [
    "#ff0000",
    "#00a800",
    "#ff4fc1",
    "#ffe100",
    "#306eff",
    "#ff9d00",
    "#7c7c7c",
  ];
  offset_x = 15;
  offset_y = 40;
  model = "";
  bodytxt = {};
  constructor(props) {
    super(props);
    this.webcamRef = React.createRef(null);
    this.canvasRef = React.createRef(null);
    this.startVideo = this.startVideo.bind(this);
    this.state = {
      viewStart: true,
      viewLoadModel: true,
      txtResult: "Masih mendeteksi...",
      restRecog: [],
    };
  }
  //   webcamRef = useRef(null);
  //   canvasRef = useRef(null);

  //  Load posenet
  runFacemesh = async () => {
    // OLD MODEL
    // const net = await facemesh.load({
    //   inputResolution: { width: 640, height: 480 },
    //   scale: 0.8,
    // });
    // NEW MODEL
    const net = await blazeface.load();
    setInterval(() => {
      this.detect(net);
    }, 10);
  };

  createModel = async (path) => {
    let model_tmp = await tf.loadLayersModel(path);
    return model_tmp;
  };

  loadModel = async (path) => {
    var status = document.getElementById("status");
    //        status.innerText = "Model Loading ..."
    this.model = await this.createModel(path);

    status.innerText = "Model Loaded !!!";
  };

  detect = async (net) => {
    if (
      typeof this.webcamRef.current !== "undefined" &&
      this.webcamRef.current !== null &&
      this.webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = this.webcamRef.current.video;
      const videoWidth = this.webcamRef.current.video.videoWidth;
      const videoHeight = this.webcamRef.current.video.videoHeight;

      // Set video width
      this.webcamRef.current.video.width = videoWidth;
      this.webcamRef.current.video.height = videoHeight;

      // Set canvas width
      this.canvasRef.current.width = videoWidth;
      this.canvasRef.current.height = videoHeight;

      // Make Detections
      // OLD MODEL
      //       const face = await net.estimateFaces(video);
      // NEW MODEL
      const returnTensors = false;
      const face = await net.estimateFaces(video, returnTensors);
      console.log(face);

      // Get canvas context
      const context = this.canvasRef.current.getContext("2d");
      context.drawImage(video, 0, 0, videoWidth, videoHeight);
      requestAnimationFrame(() => {
        this.drawMesh(face, context);
      });
    }
  };

  drawMesh = async (predictions, ctx) => {
    if (predictions.length > 0) {
      ctx.lineWidth = 4;
      ctx.font = "20px Arial";
      ctx.fillText("Result", 0, 0);
      const tempTxt = new Array();
      predictions.forEach((prediction) => {
        ctx.beginPath();

        const start = prediction.topLeft;
        const end = prediction.bottomRight;
        const size = [end[0] - start[0], end[1] - start[1]];
        let s_x = Math.floor(start[0] - this.offset_x / 2);
        let s_y = Math.floor(size[0] - this.offset_y / 2);
        let s_w = Math.floor(end[0] - start[0] + this.offset_x);
        let s_h = Math.floor(end[1] - start[1] + this.offset_y);
        // let cT = ctx.getImageData(s_x, s_y, s_w, s_h);
        let cT = ctx.getImageData(start[0], start[1], size[0], size[1]);
        cT = this.preprocess(cT);
        let z = this.model.predict(cT);
        let index = z.argMax(1).dataSync()[0];

        let label = this.emotion_labels[index];
        tempTxt.push(label);
        this.setState({ restRecog: tempTxt });
        ctx.strokeStyle = this.emotion_colors[index];
        // Render a rectangle over each detected face.
        // ctx.strokeStyle = "aqua";
        // ctx.strokeRect(s_x, s_y, s_w, s_h);
        ctx.strokeRect(start[0], start[1], size[0], size[1]);
        ctx.stroke();
        ctx.fillStyle = this.emotion_colors[index];
        ctx.fillText(label, start[0], start[1] - 5);
        ctx.closePath();
      });
    } else {
      console.log("NO FACE");
      this.setState({ restRecog: [] });
      //                status.innerHTML = "NO FACE";
    }

    if (predictions.length) {
      this.bodytxt = { capture: this.state.restRecog };
      console.log(this.bodytxt);
      // fetch("http://localhost:3579/multiresult", {
      //   method: "post",
      //   body: JSON.stringify(this.bodytxt),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then(function (response) {
      //     console.log(response.json());
      //   })
      //   .catch((error) => {
      //     // ...handle/report error
      //     console.error("Error:", error);
      //   });
      var formData = new FormData();
      formData.append("capture", this.state.restRecog);
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      };
      await axios
        .post("http://localhost:3579/multiresult", this.bodytxt, { headers })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    }
  };

  preprocess(imgData) {
    return tf.tidy(() => {
      let tensor = tf.browser.fromPixels(imgData).toFloat();

      tensor = tensor.resizeBilinear([100, 100]);

      tensor = tf.cast(tensor, "float32");
      const offset = tf.scalar(255.0);
      // Normalize the image
      const normalized = tensor.div(offset);
      //We add a dimension to get a batch shape
      const batched = normalized.expandDims(0);
      return batched;
    });
  }
  //   useEffect(()=>{runFacemesh()}, []);
  componentDidMount() {
    this.runFacemesh();
    this.loadModel(
      "https://raw.githubusercontent.com/Pradana-oss/models/master/mobilenetv1_models/model.json"
    );
  }

  startVideo() {
    this.setState({ viewStart: false, viewLoadModel: false });
  }
  render() {
    let result = this.state.restRecog;
    return (
      <div className="tm-bg-white tm-call-to-action-text" id="tmCallToAction">
        <div className="tm-bg-white tm-call-to-action-text">
          {!this.state.viewStart ? (
            <div className="inline">
              {/* <canvas id="canvas" src="" style=" margin-top:20px;" /> */}
              <canvas
                ref={this.canvasRef}
                // ref={(ref) => {
                //   this.canvasRef = ref;
                // }}
                style={{
                  // position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: "11%",
                  right: "auto",
                  textAlign: "center",
                  zindex: 9,
                  width: 640,
                  height: 480,
                }}
              />
              <Webcam
                ref={this.webcamRef}
                // ref={(ref) => {
                //   this.webcamRef = ref;
                // }}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  // top: "2%",
                  left: "11%",
                  right: "auto",
                  textAlign: "center",
                  zindex: 9,
                  width: 640,
                  height: 480,
                }}
              />
              <div>
                <center>
                  <form
                    name="myForm"
                    id="myForm"
                    target="_myFrame"
                    action="/adddata"
                    method="POST"
                  >
                    Hasil ekspresi:<br></br>
                    <span name="informasi" id="informasi">
                      {" "}
                      {result.length ? result.join() : this.state.txtResult}
                    </span>
                    {/* ini data <input name="posting" id="posting"></input> */}
                    {/* <button
                type="submit"
                value="submit"
                className="btn btn-secondary"
                >
                SUBMIT
              </button> */}
                  </form>
                </center>
              </div>
            </div>
          ) : (
            <div>
              <center style={{ padding: "10px" }}>
                <button
                  type="button"
                  id="start"
                  className="btn btn-primary"
                  onClick={this.startVideo}
                >
                  Start Video
                </button>
              </center>
              <center className="tm-call-to-action-title">
                <center>
                  <span id="original_video"></span>
                </center>
                <video id="video" width="500px"></video>
              </center>
              <div className="tm-call-to-action-description">
                <center style={{ padding: "10px", margin: "5px" }}>
                  <h4>
                    <span id="status">Model Loading...</span>
                  </h4>
                </center>
              </div>
            </div>
          )}
        </div>
        <center>
          <footer className="row">
            <div className="col-12 text-white text-center tm-copyright-text">
              Copyright &copy; 2020 App Landing Page. Designed by{" "}
              <a href="#" className="tm-copyright-link">
                TemplateMo
              </a>
            </div>
          </footer>
        </center>
      </div>
    );
  }
}

export default opencamera;
