import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addForm';

class About extends Component {

    state = {
        tempnavs : [
          {}
        ],
        todos : [
          { id: 1, desc: 'send files'},
          { id: 2, desc:  'delete files'}
        ]
      }


  deletetodo = (id) => {
    let delval = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos: delval
    })
    console.log('ID '+id + ': was deleted!')
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

    render(){
        return (
            <div>
                <h1 className="text-info">Todos</h1>
                <Todos todos={this.state.todos} deletetodo={this.deletetodo}/>
                <AddTodo  addTodo={this.addTodo}/>
            </div>
        )
    }
}
export default About