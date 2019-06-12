import React from 'react';

const Todos = ({todos, deletetodo}) => {
    let todolist = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                <span onClick={() => {deletetodo(todo.id)}}>{todo.desc}</span>
                </div>
            )
        })
    ) : (
        <p className="text-success">You have no Todos!!</p>
    )
    return(
        <div className="todos container">
        {todolist}
        </div>
    )
}
export default Todos