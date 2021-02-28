import React, { Component } from 'react'

class Containerright extends Component {

    render() {
        return (
            <div className="tm-page-col-right">
                <div className="row tm-pt-7 tm-pb-6">
                    <div className="col-md-6 tm-home-section-2-left">
                        <div
                            className="img-fluid tm-mb-4 tm-small-parallax"
                            data-parallax="scroll"
                            data-image-src="img/image-1.jpg"></div>
                        <div>
                            <h3 className="tm-text-secondary tm-mb-4">
                                Quisque at rutrum felis
                            </h3>
                            <p className="tm-mb-5">
                                Photo by CoWomen from Pexels. Morbi sollicitudin nibh eu
                                dignissim mollis. Etiam turpis tortor, ultricies sit amet
                                placerat suscipit, auctor eu diam.
                            </p>
                            <ul className="tm-list-plus">
                                <li>Vestibulum finibus consectetur nulla</li>
                                <li>Eget imperdiet eros interdum sit amet</li>
                                <li>Sed a lacinia lorem, sed luctus enim</li>
                                <li>2 small images has a parallax effect</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 tm-home-section-2-right">
                        <div
                            className="img-fluid tm-mb-4 tm-small-parallax"
                            data-parallax="scroll"
                            data-image-src="img/image-2.jpg"></div>
                        <div>
                            <h3 className="tm-text-secondary tm-mb-4">
                                Sed ultricies tortor vitae
                            </h3>
                            <p className="tm-section-2-text">
                                Photo by <strong>CoWomen</strong> from <strong>Pexels</strong>. Quisque tortor justo, pharetra in
                                eros sed, accumsan dapibus dolor. In luctus sed ante a
                                tristique.
                            </p>
                            <p>
                                You cannot re-distribute our template on your website for download. Ut ornare pulvinar lorem a elementum. Cras sollicitudin ante velit, eget facilisis sem viverra nex. Etiam quis mattis urna.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Containerright;