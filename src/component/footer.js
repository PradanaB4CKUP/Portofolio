import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return (
            <footer className="row">
                <p className="col-12 text-white text-center tm-copyright-text">
                    Copyright &copy; 2020 App Landing Page.
                    Designed by<a href="#" className="tm-copyright-link">TemplateMo</a>
                </p>
            </footer>
        )
    }
}

export default Footer;