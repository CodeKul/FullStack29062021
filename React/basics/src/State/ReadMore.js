import React, { Component } from 'react'

class ReadMore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isReadMore: false
        }
    }
    toggleReadMore = () => {
        this.setState({ isReadMore: !this.state.isReadMore })

    }
    render() {
        console.log(this.state.isReadMore)
        return (
            <div className="container mt-3">
                <div className="row">
                    {this.state.isReadMore ? (
                        <>

                            <div className="col-4">
                                <div className="card">
                                    <div className="card-title">React JS</div>
                                    <div className="card-body">
                                        <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-title">React JS</div>
                                    <div className="card-body">
                                        <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-title">React JS</div>
                                    <div className="card-body">
                                        <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : ""}

                    <React.Fragment>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-title">React JS</div>
                                <div className="card-body">
                                    <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-title">React JS</div>
                                <div className="card-body">
                                    <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-title">React JS</div>
                                <div className="card-body">
                                    <p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>


                    <div className="text-center mt-2">
                        <button className="btn btn-primary" onClick={this.toggleReadMore}>Read More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReadMore

