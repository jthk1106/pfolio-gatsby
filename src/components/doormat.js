import React from 'react';
import initials from "../assets/doer-blu-yel.png"
import animated from "animate.css"

class Doormat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid landingView">
                <div className="row justify-content-between align-items-center doormat">
                    <div className="col-12 col-md-6">
                        <div className="container doormat-left">
                            <div className="row animate__animated animate__fadeInLeft">
                                <div className="col doormat-main-text">
                                    Hi, I'm Jeremy Kim
                                </div>
                            </div>
                            <div className="row justify-content-center animate__animated animate__fadeInLeft animate__delay-1s">
                                <div className="doormat-sub-text-white">
                                    Full Stack Web Developer
                                </div>
                            </div>
                            <div className="row animate__animated animate__fadeInLeft animate__delay-1s">
                                <div className="col doormat-sub-text">
                                    in San Diego, CA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row justify-content-center">
                            <img src={initials} className="doormat-image animate__animated animate__swing animate__infinite"/>
                        </div>
                    </div>
                </div>
                <div className="row doormat-bottom">
                    <div className="col-12 col-md doormat-bottom-left">
                        Seen enough?
                    </div>
                    <div className="col-4 col-md-1 doormat-bottom-btn-container">
                        <button className="btn btn-dark doormat-bottom-btn">CONTACT ME</button>
                    </div>
                    <div className="col-12 col-md doormat-bottom-right">
                        Or scroll down for more
                    </div>
                </div>
            </div>
        )
    }
}

export default Doormat;