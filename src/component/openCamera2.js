import React, { useRef, useEffect, Component } from "react";
import * as tf from "@tensorflow/tfjs";
// OLD MODEL
//import * as facemesh from "@tensorflow-models/facemesh";

// NEW MODEL
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "../utilities";

class opencamera extends Component {
  constructor(props) {
    super(props);
    this.webcamRef = React.createRef(null);
    this.canvasRef = React.createRef(null);
    this.startVideo = this.startVideo.bind(this);
    this.state = {
      viewStart: true,
      viewLoadModel: true,
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
    const net = await facemesh.load(
      facemesh.SupportedPackages.mediapipeFacemesh
    );
    setInterval(() => {
      this.detect(net);
    }, 10);
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
      const face = await net.estimateFaces({ input: video });
      console.log(face);

      // Get canvas context
      const ctx = this.canvasRef.current.getContext("2d");
      requestAnimationFrame(() => {
        drawMesh(face, ctx);
      });
    }
  };

  //   useEffect(()=>{runFacemesh()}, []);
  componentDidMount() {
    this.runFacemesh();
  }
  startVideo() {
    this.setState({ viewStart: false, viewLoadModel: false });
  }
  render() {
    return (
      <div className="tm-bg-white tm-call-to-action-text" id="tmCallToAction">
        <div className="tm-bg-white tm-call-to-action-text">
          {!this.state.viewStart ? (
            <div className="inline">
              {/* <canvas id="canvas" src="" style=" margin-top:20px;" /> */}
              <Webcam
                ref={this.webcamRef}
                // ref={(ref) => {
                //   this.webcamRef = ref;
                // }}
                style={{
                  // position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: 640,
                  height: 480,
                }}
              />

              <canvas
                ref={this.canvasRef}
                // ref={(ref) => {
                //   this.canvasRef = ref;
                // }}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: 640,
                  height: 480,
                }}
              />
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
          <center>
            <form
              name="myForm"
              id="myForm"
              target="_myFrame"
              action="/adddata"
              method="POST"
            >
              Ekspresi: <span name="informasi" id="informasi"></span>
              ini data <input name="posting" id="posting"></input>
              <button
                type="submit"
                value="submit"
                className="btn btn-secondary"
              >
                SUBMIT
              </button>
            </form>
          </center>
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
