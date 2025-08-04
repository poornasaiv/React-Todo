import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function Homework_TodoList(){
    const [inputValue, setInputValue] = useState('');
    const [pendingTodos, setPendingTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        if (editId && inputRef.current) {
        inputRef.current.focus();
        }
    }, [editId]);

    const stats = useMemo(() => {
        return {
        totalPending: pendingTodos.length,
        totalCompleted: completedTodos.length,
        };
    }, [pendingTodos, completedTodos]);

    const handleChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const handleSubmit = useCallback(() => {
        if (!inputValue.trim()) return;
        const newTask = { id: uuidv4(), title: inputValue };
        setPendingTodos((prev) => [...prev, newTask]);
        setInputValue('');
    }, [inputValue]);

    const handleDelete = useCallback((id, isCompleted = false) => {
        if (isCompleted) {
        setCompletedTodos((prev) => prev.filter((item) => item.id !== id));
        } else {
        setPendingTodos((prev) => prev.filter((item) => item.id !== id));
        }
    }, []);

    const handleEdit = useCallback((id, title) => {
        setEditId(id);
        setEditValue(title);
    }, []);

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleSave = (id, isCompleted = false) => {
        if (isCompleted) {
        setCompletedTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, title: editValue } : item))
        );
        } else {
        setPendingTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, title: editValue } : item))
        );
        }
        setEditId(null);
        setEditValue('');
    };

    const handleCancel = () => {
        setEditId(null);
        setEditValue('');
    };

    const moveToCompleted = (id) => {
        const task = pendingTodos.find((t) => t.id === id);
        if (task) {
        setPendingTodos((prev) => prev.filter((t) => t.id !== id));
        setCompletedTodos((prev) => [...prev, task]);
        }
    };

    const moveToPending = (id) => {
        const task = completedTodos.find((t) => t.id === id);
        if (task) {
        setCompletedTodos((prev) => prev.filter((t) => t.id !== id));
        setPendingTodos((prev) => [...prev, task]);
        }
    };

    return (
        <div className="container">
        <h2>Todo List App</h2>
        <div className="input-section">
            <input
            ref={inputRef}
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter new task"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>

        <div className="lists">
            <div className="list">
            <h3>Todo Tasks</h3>
            <ul>
                {pendingTodos.map((item) => (
                <li key={item.id}>
                    {editId === item.id ? (
                    <>
                        <input
                        ref={inputRef}
                        value={editValue}
                        onChange={handleEditChange}
                        />
                        <button onClick={() => handleSave(item.id)}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </>
                    ) : (
                    <>
                        <span>{item.title}</span>
                        <button onClick={() => handleEdit(item.id, item.title)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        <button onClick={() => moveToCompleted(item.id)}>Mark as Completed</button>
                    </>
                    )}
                </li>
                ))}
            </ul>
            </div>

            <div className="list">
            <h3>Completed Tasks</h3>
            <ul>
                {completedTodos.map((item) => (
                <li key={item.id}>
                    {editId === item.id ? (
                    <>
                        <input
                        ref={inputRef}
                        value={editValue}
                        onChange={handleEditChange}
                        />
                        <button onClick={() => handleSave(item.id, true)}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </>
                    ) : (
                    <>
                        
                        <span>{item.title}</span>
                        <button onClick={() => handleEdit(item.id, item.title)}>Edit</button>
                        <button onClick={() => handleDelete(item.id, true)}>Delete</button>
                        <button onClick={() => moveToPending(item.id)}>Mark as Pending</button>
                    </>
                    )}
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
};