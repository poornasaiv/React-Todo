import { useEffect, useRef } from "react";

export default function TodoItemRedux(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.editingId === props.item.id) {
      inputRef.current?.focus();
    }
  }, [props.editingId, props.item.id]);

  return (
    <li>
      {props.item.id === props.editingId ? (
        <>
          <input
            ref={inputRef}
            value={props.editInput}
            onChange={props.handleEditInput}
          />
          <div className="todo-actions">
            <button onClick={() => props.saveTodo(props.item.id)}>
              Save
            </button>
            <button onClick={props.cancelEdit}>Cancel</button>
            <button onClick={() => props.toggleCompleted(props.item.id)}>
              {props.item.isCompleted ? "←" : "→"}
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{props.item.value}</span>
          <div className="todo-actions">
            {!props.item.isCompleted && (
              <button onClick={() => props.editTodo(props.item)}>Edit</button>
            )}
            <button onClick={() => props.deleteTodo(props.item.id)}>Delete</button>
            <button onClick={() => props.toggleCompleted(props.item.id)}>
              {props.item.isCompleted ? "←" : "→"}
            </button>
          </div>
        </>
      )}
    </li>
  );
}
