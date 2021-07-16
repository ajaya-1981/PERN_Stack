import React, { Fragment, useEffect, useState } from "react";
import EditTodo from './EditToDo';

const ListToDos = () => {
    const [todos, setTodos] = useState([]);
    const deleteTodo = async id => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
            console.log(response);
            // getTodos();
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsondata = await response.json();
            setTodos(jsondata);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);
    return <Fragment>
        <table className="table table-bordered mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>
                                {todo.description}
                            </td>
                            <td>
                                <EditTodo todo = {todo}> </EditTodo>
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id)}>
                                    Delete</button>
                            </td>
                        </tr>

                    ))}
                {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}


            </tbody>
        </table>

    </Fragment>;
}

export default ListToDos;