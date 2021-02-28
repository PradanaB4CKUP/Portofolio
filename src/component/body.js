import Header from "./header";

const { Component } = require("react")

class Body extends Component {
    render() {
        return (
            <div>
                <section className="row" id="tmHome">
                    <div className="col-12 tm-home-container">
                        <div className="text-white tm-home-center">
                            <p className="text-uppercase tm-slogan">Smart Ads</p>
                            <center>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/QgxmyJd-55U?autoplay=1&mute=1&loop=1&playlist=QgxmyJd-55U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </center>
                            <hr className="tm-home-hr" />
                            <h2 className="tm-home-title tm-home-center">The Best Survei Tool For You</h2>
                            <p className="tm-home-text tm-home-center">
                                Smart Ads merupakan program berbasis web yang menggunakan pembelajaran mesin Tensorflow.js sehingga dapat mendeteksi objek (ekspresi wajah) kemudian meng-interpretasikannya berupa data
                            </p>
                            <a href="#tmFeatures" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </section>
                <div className="row" id="tmFeatures">
                    <div className="col-lg-4">
                        <div className="tm-bg-white-transparent tm-feature-box">
                            <h3 width="90%">Tensorflow</h3>

                            <div style={{ "margin-top": "30px" }}>
                                <img src="img/tf.png" width="170px" alt="TensorFlow" />
                            </div>

                            <p className="text-center" style={{ "margin-top": "30px" }}>TensorFlow.js digunakan untuk mendeteksi exkpressi object.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tm-bg-white-transparent tm-feature-box">
                            <h3 width="60%" >Webcam</h3>

                            <div>
                                <img src="img/webcam.png" width="230px" alt="TensorFlow" />
                            </div>
                            <p className="text-center">Digunakan untuk merekam object secara real-time.
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="tm-bg-white-transparent tm-feature-box">
                            <h3>RealTime Database</h3>

                            <div style={{ "margin-top": "30px" }}>
                                <img src="img/database.png" width="180px" alt="TensorFlow" />
                            </div>
                            <p className="text-center" style={{ "margin-top": "30px" }}>Mengirim dan menyimpan database secara real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;

