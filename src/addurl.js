import React, { Component } from 'react';

    const marginTop = {
        margin: '100px 0 0 0'
    }
class Addurl extends Component {
    state = {
        name: null,
        url: null
    }
    handeChange = (e) =>{
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }
    handeSubmit = (e) => {
        e.preventDefault();
        this.props.addNav(this.state);
    }
    render(){
        return (

        <div className="" style={marginTop}>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                    <div className="card card-signup">
                        <form className="form" onSubmit={this.handeSubmit}>
                            <div className="card-body">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                           <label htmlFor="name">Name: </label>
                                        </span>
                                    </div>
                                    <input type="text"  onChange={this.handeChange} className="form-control"id="name" placeholder="Enter Nav Name"></input>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                           <label htmlFor="url">Url: </label>
                                        </span>
                                    </div>
                                    <input type="text"  onChange={this.handeChange} id="url" className="form-control" placeholder="Enter url..."></input>
                                </div>
                            </div>
                            <div className="footer text-center">
                                <button className="btn btn-primary btn-link btn-wd btn-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>

        )
    }
}

export default Addurl