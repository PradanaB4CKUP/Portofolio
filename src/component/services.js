import React, { Component } from 'react';
import Opencamera from "./opencamera";

class Services extends Component {

    render() {
        return (
            <div>
            <section className="row" id="tmServices">
                <div className="col-12">
                    <div className="parallax-window tm-services-parallax-header"
                        data-parallax="scroll"
                        data-z-index="101"
                        data-image-src="img/coffee-glass.jpg">

                        <div className="tm-bg-black-transparent text-center tm-services-header">
                            <h2 className="text-uppercase tm-services-page-title">How Did It Works</h2>
                            <p className="tm-services-description mb-0 small">
                                Y O U D S berjalan di Aplikasi Android <br />
                                    Dengan hanya melihat iklan di halaman ini <br />
                                        Klik Start Video dan tunjukan ekspresimu !!.
                            </p>
                        </div>
                    </div>
                </div>
                </section>

                <center>
                    <div>
                        <Opencamera />
                    </div>
                </center>
                </div>
            
        )
    }
}

export default Services;