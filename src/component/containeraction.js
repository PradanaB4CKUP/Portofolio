import React, { Component } from 'react'

class Containeraction extends Component {

    render() {
        return (
            <section className="row" id="tmCallToAction">
                <div className="col-12 tm-page-cols-container tm-call-to-action-col">
                    <div className="tm-page-col-right">
                        <div className="tm-call-to-action-box">
                            <i className="fas fa-3x fa-rss-square tm-call-to-action-icon"></i>
                            <div className="tm-call-to-action-text">
                                <h3 className="tm-call-to-action-title">
                                    Vivamus sollicitudin tellus
                                </h3>
                                <p className="tm-call-to-action-description">
                                    Maecenas maximus tellus in dolor auctor tristique. Nam
                                    hendrerit posuere laoreet. Aliquam erat volutpat. Nulla eros
                                    est, imperdiet vel feugiat non, ullamcorper mattis nulla.
                                </p>
                                <form action="#" method="GET" className="tm-call-to-action-form">
                                    <input type="email" name="email" placeholder="Email" className="tm-email-input" required />
                                    <button type="submit" className="btn btn-primary">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Containeraction