import React from 'react';
import animated from "animate.css"
import c19 from '../assets/c19monitor.surge.sh_.png'
import urbanSpeaker from '../assets/theurbanspeaker.herokuapp.com_.png'
import vstda from '../assets/vstda.png'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid" style={{backgroundColor: "#ffde59", paddingBottom: "3em"}}>
                <div className="row">
                    <div className="col section-header">
                        Projects
                    </div>
                </div>
                <div className="row justify-content-center" style={{marginTop: "1em"}}>
                    <div className="col-12 col-md-5">
                        <div className="card" style={{marginTop: "3em"}}>
                            <img className="card-img-top" src={c19} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">covid19 monitor</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="#" className="btn btn-dark project-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5" style={{marginTop: "3em"}}>
                        <div className="card" style={{width: ""}}>
                            <img className="card-img-top" src={vstda} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">very simple to do app</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="#" className="btn btn-dark project-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5">
                        <div className="card" style={{marginTop: "3em"}}>
                            <img className="card-img-top" src="..." alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">street eats app</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="#" className="btn btn-dark project-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5" style={{marginTop: "3em"}}>
                        <div className="card" style={{width: ""}}>
                            <img className="card-img-top" src={urbanSpeaker} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">the urban speaker</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="#" className="btn btn-dark project-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5">
                        <div className="card" style={{marginTop: "3em"}}>
                            <img className="card-img-top" src="..." alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">slackbot</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="#" className="btn btn-dark project-btn">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;