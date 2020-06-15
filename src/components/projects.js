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
import se1 from '../assets/se1.png'
import se2 from '../assets/se2.png'
import se3 from '../assets/se3.png'
import se4 from '../assets/se4.png'
import se5 from '../assets/se5.png'
import se6 from '../assets/se6.png'
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
                                    <a href="https://c19monitor.surge.sh/" target="_blank" className="btn btn-dark project-btn">Live</a>
                                    <a href="https://github.com/jthk1106/jamC19" target="_blank" className="btn btn-dark project-btn">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5" style={{marginTop: "3em"}}>
                        <div className="card" style={{width: ""}}>
                            <img className="card-img-top" src={vstda} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">very simple to-do app</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="https://vstda-by-jk.now.sh/" target="_blank" className="btn btn-dark project-btn">Live</a>
                                    <a href="https://github.com/jthk1106/react-vstda" target="_blank" className="btn btn-dark project-btn">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    
                    <div className="col-12 col-md-5" style={{marginTop: "3em"}}>
                        <div className="card" style={{width: ""}}>
                            <img className="card-img-top" src={urbanSpeaker} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">the urban speaker</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="https://theurbanspeaker.herokuapp.com/" target="_blank" className="btn btn-dark project-btn">Live</a>
                                    <a href="https://github.com/jthk1106/the-urban-speaker" target="_blank" className="btn btn-dark project-btn">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-12 col-md-5">
                        <div className="card" style={{marginTop: "3em"}}>
                            <Carousel className='project-carousel' interval='2500'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={se1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Manage Reviews (admin)</h3>
                                        {/* <p className='project-carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={se2}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Review Response (admin)</h3>
                                        {/* <p className='project-carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={se3}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Restaurant Reviews (user)</h3>
                                        {/* <p className='project-carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={se4}
                                        alt="Fourth slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Manage Menu (admin)</h3>
                                        {/* <p className='project-carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={se5}
                                        alt="Fifth slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Edit Menu Item (admin)</h3>
                                        {/* <p className='project-carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={se6}
                                        alt="Sixth slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Add Menu Item (admin)</h3>
                                        {/* <p className='project-carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">food truck locator and review app (production)</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="project-btn-div">
                                    <a href="#" className="btn btn-dark project-btn">Live</a>
                                    <a href="#" className="btn btn-dark project-btn">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="card" style={{marginTop: "3em"}}>
                            <Carousel className='project-carousel' interval='2500'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={studentdash}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Student Dashboard</h3>
                                        {/* <p className='project-carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
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
                                        {/* <p className='project-carousel-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={adminlogin}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Admin Login</h3>
                                        {/* <p className='project-carousel-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={admindash}
                                        alt="Fourth slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Admin Dashboard</h3>
                                        {/* <p className='project-carousel-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={adminstudentview}
                                        alt="Fifth slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Admin Student View</h3>
                                        {/* <p className='project-carousel-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={adminedit}
                                        alt="Sixth slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Admin Student Edit</h3>
                                        {/* <p className='project-carousel-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={adminaccountability}
                                        alt="Seventh slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className='project-carousel-text'>Admin Student Partner Edit</h3>
                                        {/* <p className='project-carousel-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <div className="card-body">
                                <h5 className="card-title">admin & user dashboards (production)</h5>
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