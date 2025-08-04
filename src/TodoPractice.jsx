import { useState } from "react";
import { v4 as uuid } from 'uuid';


export default function TodoPractice(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [editId, setEditId] = useState(null);

    const trackInputField = (e) => {
        setInput(e.target.value);
    };

    const handleAddTodo = (todoName) => {
        setTodos(prevTodos => [...prevTodos, {name:todoName, id:uuid(), isDone:false}]);
        setInput("");
    };

    const handleDeleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id != id));
    };

    const handleEditTodo= (id, name) => {
        setEditId(id);
        setInput(name);
    };

    const handleSaveTodo = (id, name) => {
        setTodos(prevTodos => prevTodos.map((todo) => (todo.id == id) ? {...todo, name:name} : todo ));
        setInput("");
        setEditId(null);
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setInput("");
    };


    return (
        <>
            <h3>Todo List</h3>


            <div className = "form-div">
                <input value={input} placeholder="Enter the task name" onChange={(e)=>trackInputField(e)}/>
                &nbsp; &nbsp;
                <button onClick={()=>handleAddTodo(input)}>Add Task</button>
                <br />
                <br />
            </div>


            <div className="todo-list">
                {todos.map((todo)=>{
                    return (
                            <div className="todo-item" key={todo.id}>
                                {editId=== todo.id ? 
                                    (<>
                                        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
                                        <button onClick={()=>handleSaveTodo(todo.id, input)}>Save</button>
                                        <button onClick={()=>handleCancelEdit()}>Cancel</button>
                                    </>)
                                    :
                                    (<>
                                        <span>{todo.name}</span>
                                        &nbsp; &nbsp;
                                        <button onClick={()=> handleEditTodo(todo.id, todo.name)}>Edit</button>
                                        <button onClick={()=> handleDeleteTodo(todo.id)}>Delete</button>
                                    </>)
                                }                                
                            </div>
                    );
                })}
            </div>
        </>
    )
};