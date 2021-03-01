import Header from "./header";
import Opencamera from "./opencamera";

const { Component } = require("react")

class Body extends Component {
    render() {
        return (
            <div>
                <section className="row" id="tmHome">
                    <div className="col-12 tm-home-container">
                        <div className="text-white tm-home-center">
                            <p className="text-uppercase tm-slogan">Y O U D S</p>
                            <center>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/7bXJ_obaiYQ?autoplay=1&mute=1&loop=1&playlist=7bXJ_obaiYQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </center>
                            <hr className="tm-home-hr" />
                            <h2 className="tm-home-title tm-home-center">PERSONAL ADVERTISING</h2>
                            <p className="tm-home-text tm-home-center">
                                Y O U D S merupakan aplikasi berbasis WebApp yang menggunakan pembelajaran mesin Tensorflow untuk mendeteksi objek (ekspresi wajah) kemudian meng-interpretasikannya berupa data
                            </p>
                            <a href="#tmFeatures" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </section>
                <div className="row" id="tmFeatures">
                    <div className="col-lg-4">
                        <div className="tm-bg-white-transparent tm-feature-box">
                            <h3 width="90%">Tensorflow</h3>

                            <div style={{ "margin-top": "20px" }}>
                                <img src="img/tf.png" width="210px" alt="TensorFlow" />
                            </div>

                            <p className="text-center" style={{ "margin-top": "20px" }}>TensorFlow.js digunakan untuk mendeteksi exkpressi object.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tm-bg-white-transparent tm-feature-box">
                            <h3 width="60%" >Webcam</h3>

                            <div style={{ "margin-top": "20px" }}>
                                <img src="img/webcam.png" width="210px" alt="Webcam" />
                            </div>
                            <p className="text-center" style={{ "margin-top": "20px" }}>Digunakan untuk merekam object secara real-time.
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tm-bg-white-transparent tm-feature-box">
                            <h3>RealTime Database</h3>

                            <div style={{ "margin-top": "20px" }}>
                                <img src="img/database.png" width="210px" alt="Database" />
                            </div>
                            <p className="text-center" style={{ "margin-top": "20px" }}>Mengirim dan menyimpan database secara real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;

