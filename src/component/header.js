import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import Body from './body';

class Header extends Component {
    render() {
        return (
            <div className="row tm-brand-row">
                <div className="col-lg-4 col-11">
                    <div className="tm-brand-container tm-bg-white-transparent">
                        <i className="fas fa-2x fa-pen tm-brand-icon"></i>
                        <div className="tm-brand-texts">
                            <h1 className="text-uppercase tm-brand-name">SMART ADS</h1>
                            <p className="small">new app landing page</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-1">
                    <div className="tm-nav">
                        <nav className="navbar navbar-expand-lg navbar-light tm-bg-white-transparent tm-navbar">
                            <button className="navbar-toggler" type="button"
                                data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <div className="tm-nav-link-highlight"></div>
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="tm-nav-link-highlight"></div>
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <div className="tm-nav-link-highlight"></div>
                                        <Link className="nav-link" to="/services">services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <div className="tm-nav-link-highlight"></div>
                                        <Link className="nav-link" to="/testimonial">Testimonial</Link>
                                    </li>
                                    <li className="nav-item">
                                        <div className="tm-nav-link-highlight"></div>
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;