import React from 'react';
import animated from "animate.css"
import c19 from '../assets/c19monitor.surge.sh_.png'
import urbanSpeaker from '../assets/theurbanspeaker.herokuapp.com_.png'
import vstda from '../assets/vstda.png'
import studentlogin from '../assets/slackbot-studentlogin.png'
import studentdash from '../assets/slackbot-studentdash.png'
import adminlogin from '../assets/slackbot-adminlogin.png'
import admindash from '../assets/slackbot-admindash.png'
import adminstudentview from '../assets/slackbot-adminstudentview.png'
import adminaccountability from '../assets/slackbot-adminaccountabilitypartner.png'
import adminedit from '../assets/slackbot-admineditstudent.png'
import Carousel from 'react-bootstrap/Carousel';


class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="container-fluid projects">
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
                                    <a href="#" className="btn btn-dark project-btn">Live</a>
                                    <a href="#" className="btn btn-dark project-btn">Github</a>
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
                                    <a href="#" className="btn btn-dark project-btn">Live</a>
                                    <a href="#" className="btn btn-dark project-btn">Github</a>
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
                                    <a href="#" className="btn btn-dark project-btn">Live</a>
                                    <a href="#" className="btn btn-dark project-btn">Github</a>
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
                                    <a href="#" className="btn btn-dark project-btn">Live</a>
                                    <a href="#" className="btn btn-dark project-btn">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5">
                        <div className="card" style={{marginTop: "3em"}}>
                            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                            <Carousel className='project-carousel' interval='3000'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={studentdash}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Student Dashboard</h3>
                                        <p className='project-carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={studentlogin}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Student Login</h3>
                                        <p className='project-carousel-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={admindash}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Admin Dashboard</h3>
                                        <p className='project-carousel-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={studentdash} alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={studentlogin} alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={admindash} alt="Third slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div> */}
                            <div className="card-body">
                                <h5 className="card-title">slackbot</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="#" className="btn btn-dark project-btn">Live</a>
                                    <a href="#" className="btn btn-dark project-btn">Github</a>
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