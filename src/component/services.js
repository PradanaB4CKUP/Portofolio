import React, { Component } from 'react'

class Services extends Component {

    render() {
        return (
            <section className="row" id="tmServices">
                <div className="col-12">
                    <div className="parallax-window tm-services-parallax-header"
                        data-parallax="scroll"
                        data-z-index="101"
                        data-image-src="img/coffee-glass.jpg">

                        <div className="tm-bg-black-transparent text-center tm-services-header">
                            <h2 className="text-uppercase tm-services-page-title">Our Services</h2>
                            <p className="tm-services-description mb-0 small">
                                This is a parallax movement background image "coffee glass". <br />
                                    Aliquam egestas lectus semper enim malesuada, in convallis nunc sagittis.<br />
                                        Pellentesque quis tellus vel tortor malesuada egestas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="tm-bg-black-transparent tm-services-detail-box">
                        <p>
                            Aenean convallis justo purus, id pulvinar enim finibus vitae. Fusce et bibendum nisi, vitae mollis turpis. Aliquam tellus mi, maximus vel orci
                            imperdiet, convallis cursus tortor. Donec sollicitudin metus sit amet nisl rhoncus, id ultrices risus interdum. Proin mollis nulla nulla, ac cursus enim ornare a. Cras quis porta lectus. Pellentesque eu ultrices arcu. Proin ac tristique dui. Praesent mi odio, aliquam ac leo sit amet, dictum sodales diam.
                        </p>
                        <p>
                            Quisque commodo, orci eget suscipit vestibulum, metus orci fringilla urna, eget dignissim justo odio sit amet tellus. Morbi dapibus molestie
                            massa nec congue. Etiam lacinia pretium psuere. Integer sodales porttitor lobortis. Nam vestibulum vestibulum lectus non pulvinar.
                            Vivamus eget sapien vitae magna lobortis rhoncus molestie sit amet est. Fusce ultrices justo vitae blandit consequat.
                        </p>
                    </div>
                </div>

                <div className="col-12 tm-tabs-container">
                    <div className="tm-tab-links">
                        <ul className="tabs clearfix" data-tabgroup="first-tab-group">
                            <li>
                                <a href="#tab1" className="active">
                                    <div className="icon-wrap"><i className="fas fa-2x fa-leaf"></i></div>
                                    Service Tab One
                                </a>
                            </li>
                            <li>
                                <a href="#tab2" className="">
                                    <div className="icon-wrap"><i className="fab fa-2x fa-canadian-maple-leaf"></i></div>
                                    Service Tab Two
                                </a>
                            </li>
                            <li>
                                <a href="#tab3" className="">
                                    <div className="icon-wrap"><i className="fab fa-2x fa-pagelines"></i></div>
                                    Service Tab Three
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tm-tab-contents">
                        <div id="first-tab-group" className="tabgroup">
                            <div id="tab1">
                                <div className="text-content">
                                    <h3 className="tm-service-tab-title">Service Tab One</h3>
                                    <p className="tm-service-tab-p">
                                        Etiam egestas metus vitae est interdum, in eleifend nunc volutpat. Aliquam molestie
                                        ipsum quis suscipit lacinia. Mauris turpis libero, iaculis non dictum ac, ornare a massa.
                                        Duis id lorem purus. Fusce viverra ullamcorper metus. Curabitur puvinar suscipit sapien
                                        ac blandit. Aliquam vel pulvinar purus, sit amet luctus urna.
                                    </p>
                                    <p className="mb-0">
                                        Nam consequat, leo vitae aliquet dignissim, leo est laoreet nibh, nec dictum libero justo
                                        vitae dolor. Donec tristique eros at nisi elementum efficitur. Proin ornare feugiat ex placerat pellenteqsue. Nulla convallis est volutpat ex ultrices facilisis.
                                    </p>
                                </div>
                            </div>
                            <div id="tab2">
                                <div className="text-content">
                                    <h3 className="tm-service-tab-title">Service Tab Two</h3>
                                    <p className="tm-service-tab-p">
                                        Nam consequat, leo vitae aliquet dignissim, leo est laoreet nibh, nec dictum libero justo
                                        vitae dolor. Donec tristique eros at nisi elementum efficitur. Proin ornare feugiat ex placerat pellenteqsue. Nulla convallis est volutpat ex ultrices facilisis.
                                    </p>
                                    <p className="mb-0">
                                        Etiam egestas metus vitae est interdum, in eleifend nunc volutpat. Aliquam molestie
                                        ipsum quis suscipit lacinia. Mauris turpis libero, iaculis non dictum ac, ornare a massa.
                                        Duis id lorem purus. Fusce viverra ullamcorper metus. Curabitur puvinar suscipit sapien
                                        ac blandit. Aliquam vel pulvinar purus, sit amet luctus urna.
                                    </p>
                                </div>
                            </div>
                            <div id="tab3">
                                <div className="text-content">
                                    <h3 className="tm-service-tab-title">Service Tab Three</h3>
                                    <p className="tm-service-tab-p">
                                        Mauris turpis libero, iaculis non dictum ac, ornare a massa.
                                        Duis id lorem purus. Fusce viverra ullamcorper metus. Curabitur puvinar suscipit sapien
                                        ac blandit. Aliquam vel pulvinar purus, sit amet luctus urna. Nulla convallis est volutpat ex ultrices facilisis.
                                    </p>
                                    <p className="mb-0">
                                        Etiam egestas metus vitae est interdum, in eleifend nunc volutpat. Aliquam molestie
                                        ipsum quis suscipit lacinia. Nam consequat, leo vitae aliquet dignissim, leo est laoreet nibh, nec dictum libero justo
                                        vitae dolor. Donec tristique eros at nisi elementum efficitur. Proin ornare feugiat ex placerat pellenteqsue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;