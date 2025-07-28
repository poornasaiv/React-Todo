import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function TodoList(){
    let [tasks, setTasks] = useState([]);
    let [input, setInput] = useState("");
    let [editId, setEditId] = useState(null);
    let [editInput, setEditInput] = useState("");

    console.log(tasks);
    
    let addTask = (newTask) => {
        setTasks(prevTasks => [...prevTasks, {task: newTask, id: uuid(), isDone:false}]);
        setInput("");
        console.log(tasks);

    };

    let trackInput = (e) => {
        let newValue = e.target.value;
        console.log(newValue);
        setInput(newValue);
    };

    let trackEditInput = (e) => {
        setEditInput(e.target.value);
    }

    let deleteTask = (id) => {
        let records = tasks.filter(task => task.id != id);
        setTasks(records)
    };

    let doneTask = (id) => {
        setTasks(prevTasks => prevTasks.map(task => {
            if(task.id === id)
            {
                return {...task, isDone: true};
            }
            else
            {
                return task;
            }
        }))
    };

    let editTask = (id) => {
        let editableTask = tasks.find(task => task.id === id);
        setEditId(id);
        setEditInput(editableTask.task) 
    };

    return (
        <div>
            <div className = "form">
                <input placeholder="Task Name" 
                        value={input}
                        onChange={trackInput}
                />

                <button onClick = {() => addTask(input)}>Add Task</button>
            </div>
            <h4>ToDo List</h4>
            <div className = "tasks">
                {tasks.map((task) => {
                    return (
                            <>
                                <div className="task" key={task.id}>
                                    <>
                                        {editId == task.id ? 
                                            (<>
                                                <input value={editInput} onChange = {(e)=>trackEditInput(e)} />
                                                <button 
                                                    onClick={()=>
                                                        {
                                                            setTasks(prevTasks => 
                                                                prevTasks.map(t=> 
                                                                        (t.id == task.id) ? {...t, task:editInput} : t
                                                                                )
                                                                    )
                                                            setEditId(null);
                                                            setEditInput("");                                    
                                                        }
                                                    }
                                                >Save</button>
                                                <button onClick={()=>{setEditId(null); setEditInput("");}}>Cancel</button>
                                            </>)
                                            :
                                            (<>
                                                <span style={task.isDone ? {textDecorationLine: "line-through"} : {textDecorationLine: ""}}>{task.task}</span>
                                                &nbsp; &nbsp;
                                                <button onClick={()=>editTask(task.id)}>Edit</button>
                                                <button onClick={()=> deleteTask(task.id)}>Delete</button>
                                                <button onClick={()=> doneTask(task.id)}>Mark as Done</button>
                                            </>)
                                        }
                                    </>
                                    
                                </div>
                            </>
                            )
                })}
            </div>
        </div>
    );
};