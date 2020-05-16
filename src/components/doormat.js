import React from 'react';
import initials from "../assets/doer.clear.png"
import animated from "animate.css"

class Doormat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-between align-items-center doormat">
                    <div className="col-4 doormat-left">
                        <div className="container">
                            <div className="row doormat-main-text">
                                Hi, I'm Jeremy Kim
                            </div>
                            <div className="row doormat-sub-text-white">
                                Full Stack Web Developer
                            </div>
                            <div className="row doormat-sub-text">
                                in San Diego, CA
                            </div>
                        </div>
                    </div>
                    <div className="col-4 doormat-right">
                        <img src={initials} className="doormat-image animate__animated animate__swing animate__infinite"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Doormat;