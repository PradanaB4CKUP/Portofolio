import React, { Component } from 'react'
import Containerright from './containerright';
class Container extends Component {

    render() {
        return (
            <div>
                <div className="parallax-window" data-parallax="scroll" data-image-src="img/bg-01.jpg">
                    <div className="container-fluid"></div>
                </div>
            </div>
        )
    }
}

export default Container