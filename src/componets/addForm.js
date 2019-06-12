import React, { Component } from 'react';

const marginTop = {
    margin: '100px 0 0 0'
}
class AddTodo extends  Component {
    state = {
        desc: ''
    }
    handlechange = (e) => {
        this.setState({
            desc: e.target.value
        })
    }
    handlesubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            desc: ''
        })
    }
    render(){
        return (
            <div>
                <form style={marginTop} onSubmit={this.handlesubmit}>
                    <label htmlFor="desc">Add Todo:</label>
                <input type="text" onChange={this.handlechange} name='desc' className='form-control' value={this.state.desc}/>
                </form>
            </div>
        )
    }
}
export default AddTodo