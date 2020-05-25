import React from 'react';
import animated from "animate.css"

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        console.log(this.state.name, this.state.email, this.state.message)
        return (
            <div className="container-fluid contact" style={{backgroundColor: "#527565", paddingBottom: "3em"}}>
                <div className="row">
                    <div className="col section-header">
                        Contact
                    </div>
                </div>
                <div className="row justify-content-center" id="contactSection" style={{marginTop: "1em"}}>
                    <div className="col-12 col-md-4">
                        <div className="row">
                            <div className="col">
                                <label className="contactLabel" htmlFor="">
                                    Name
                                </label>
                                <input type="text" className="form-control" onChange={(e) => this.setState({name: e.target.value})}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="contactLabel" htmlFor="">
                                    Email
                                </label>
                                <input type="text" className="form-control" onChange={(e) => this.setState({email: e.target.value})}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="contactLabel" htmlFor="">
                                    Message
                                </label>
                                <textarea type="text" class="form-control" onChange={(e) => this.setState({message: e.target.value})}></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <button className="btn btn-dark contactBtn">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto copyright">
                        © 2020 Jeremy Kim
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;