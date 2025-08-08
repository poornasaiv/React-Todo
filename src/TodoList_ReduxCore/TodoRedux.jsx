// import "./TodoRedux.css";
import { useState, useMemo, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItemRedux from "./TodoItemRedux";
import { useSelector, useDispatch } from "react-redux";

function TodoRedux() {
  const [todoItem, setTodoItem] = useState("");
  const [editInput, setEditInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef();

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const pendingTodos = useMemo(() => todoList.filter((t) => !t.isCompleted), [todoList]);
  const completedTodos = useMemo(() => todoList.filter((t) => t.isCompleted), [todoList]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [todoItem]);

  const handleTodoItemChange = (e) => setTodoItem(e.target.value);
  const handleEditInput = (e) => setEditInput(e.target.value);

  const addTodoItem = () => {
    if (todoItem.trim()) {
      dispatch({ type: "ADD_TODO", id: uuidv4(), value: todoItem });
      setTodoItem("");
    }
  };

  const editTodo = (item) => {
    if (editingId !== null) {
      alert("Please save the current edit first.");
      return;
    }
    setEditInput(item.value);
    setEditingId(item.id);
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const saveTodo = (id) => {
    if (editInput.trim()) {
      dispatch({ type: "EDIT_TODO", id, value: editInput });
      setEditInput("");
      setEditingId(null);
    }
  };

  const cancelEdit = () => {
    setEditInput("");
    setEditingId(null);
  };

  const toggleCompleted = (id) => {
    if (editingId === id) {
      alert("Please save the current edit first.");
      return;
    }
    dispatch({ type: "TOGGLE_TODO", id });
  };

  return (
    <>
      <div className="input-container">
        <input
          ref={inputRef}
          value={todoItem}
          onChange={handleTodoItemChange}
          onKeyDown={(e) => e.key === "Enter" && addTodoItem()}
          placeholder="Add task to the list"
        />
        <button onClick={addTodoItem}>Add</button>
      </div>

      <div id="todo-list-container">
        {pendingTodos.length > 0 && (
          <div className="todo-container">
            <h2 className="todo-list-title">Pending Todos</h2>
            <ul>
              {pendingTodos.map((item) => (
                <TodoItemRedux
                  key={item.id}
                  item={item}
                  editingId={editingId}
                  editInput={editInput}
                  handleEditInput={handleEditInput}
                  saveTodo={saveTodo}
                  cancelEdit={cancelEdit}
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                  toggleCompleted={toggleCompleted}
                />
              ))}
            </ul>
          </div>
        )}

        {completedTodos.length > 0 && (
          <div className="todo-container">
            <h2 className="todo-list-title">Completed Todos</h2>
            <ul>
              {completedTodos.map((item) => (
                <TodoItemRedux
                  key={item.id}
                  item={item}
                  editingId={editingId}
                  editInput={editInput}
                  handleEditInput={handleEditInput}
                  saveTodo={saveTodo}
                  cancelEdit={cancelEdit}
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                  toggleCompleted={toggleCompleted}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default TodoRedux;
