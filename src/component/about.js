import React, { Component } from 'react'

class About extends Component {

    render() {
        return (
            <section className="row" id="tmAbout">
                <header className="col-12 tm-about-header">
                    <h2 className="text-uppercase text-center text-dark tm-about-page-title">About this app</h2>
                    <hr className="tm-about-title-hr"></hr>
                </header>
                <div className="col-lg-4">
                    <div className="tm-bg-black-transparent tm-about-box">
                        <div className="tm-about-number-container">0.1</div>
                        <h3 className="tm-about-name">Best Quality</h3>
                        <p className="tm-about-description">
                            Integer dapibus aliquam accumsan. Nam diam elit, mollis quis elit sed, hendrerit dapibus eros. Cras auctor laoreet tortor eget. BG #0F1D20
                  </p>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="tm-bg-black-transparent tm-about-box">
                        <div className="tm-about-number-container">0.2</div>
                        <h3 className="tm-about-name">Satisfaction</h3>
                        <p className="tm-about-description">
                            Parallo is a HTML landing page template based on Bootstrap v4.3.1 framework. Please tell your friends about TemplateMo.
                  </p>
                        <a href="#tmFeatures" className="btn btn-tertiary tm-btn-app-feature">More</a>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="tm-bg-black-transparent tm-about-box">
                        <div className="tm-about-number-container">0.3</div>
                        <h3 className="tm-about-name">High Return</h3>
                        <p className="tm-about-description">
                            You are allowed to use this for commercial purpose or personal site.
                  </p>
                        <p className="tm-about-description">
                            You are NOT allowed to redistribute this template on any download site or template collection sites.
                  </p>
                        <a href="#tmFeatures" className="btn btn-secondary tm-btn-app-feature">Details</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;