import React, { Component } from 'react'

class Contact extends Component {

    render() {
        return (
            <section className="row tm-contact-row">
                <div className="col-lg-6 tm-contact-col-left">
                    <form action="#" method="POST" id="tmContactForm" className="tm-bg-black-transparent tm-contact-form">
                        <div className="form-group">
                            <input type="text" id="contact_name" name="contact_name" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Name" required=""></input>
                        </div>
                        <div className="form-group">
                            <input type="email" id="contact_email" name="contact_email" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Email" required=""></input>
                        </div>
                        <div className="form-group">
                            <textarea rows="6" id="contact_message" name="contact_message" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Message" required=""></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary tm-btn-submit rounded-0">
                                Submit
                    </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 tm-contact-col-right">
                    <div className="tm-bg-black-transparent tm-contact-text">

                        <i className="mx-auto mb-5 fas fa-3x fa-address-card tm-app-feature-icon"></i>

                        <h3 className="tm-service-tab-title">Maecenas in aliquam lorem</h3>
                        <p className="tm-service-tab-p">
                            Proin rutrum massa quis erat mollis iaculis. Vestibulum
                            a risus ex. Nunc rhoncus, justo at blandit cursus, orci
                            erat molestie felis, id ullamcorper mauris felis eu eros.
                    </p>
                        <p className="mb-0">
                            Donec turpis augue, mollis eu erat in, posuere congue
                            sapien.  Maecenas facilisis dui sit amet ornare aliquam.
                            Paesent malesuada mi a est pulvinar.
                    </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
