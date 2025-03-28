import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
    const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    const [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        if (newTodo.trim() !== "") { // Prevent empty tasks
            setTodos([...todos, { task: newTodo, id: uuidv4() }]); // Append new task
            setNewTodo(""); // Clear input after adding
        }
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    // Fixing deleteTodo function
    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <input type="text" placeholder="Task" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addTask}>Add Task</button>
            <br /><br /><br /><br />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task} &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
