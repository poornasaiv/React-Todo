import { Component, createRef } from "react";

class Homework_TodoItemClass extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.editingId === this.props.item?.id &&
      prevProps.editingId !== this.props.editingId
    ) {
      this.inputRef.current?.focus();
    }
  }

  render() {
    const { item } = this.props;

    if (!item) return null;

    return (
      <li>
        {this.props.editingId === item.id ? (
          <>
            <input
              ref={this.inputRef}
              value={this.props.editInput}
              onChange={this.props.handleEditInput}
              onKeyDown={(e) =>
                e.key === "Enter" && this.props.saveTodo(item.id)
              }
            />

            <span className="todo-actions">
              <button
                className="save-edit-btn"
                onClick={() => this.props.saveTodo(item.id)}>
                Save
              </button>

              <button
                className="delete-cancel-btn"
                onClick={this.props.cancelEdit}>
                Cancel
              </button>

              <button
                className="toggle-btn"
                onClick={() => this.props.toggleCompleted(item.id)}
                title={
                  item.isCompleted ? "Mark as Pending" : "Mark as Completed"
                }>
                {item.isCompleted ? "Mark as Pending" : "Mark as Completed"}
              </button>
            </span>
          </>
        ) 
        : 
        (
          <>
            <span>{item.value}</span>
            <span className="todo-actions">
              {!item.isCompleted && (
                <button
                  className="save-edit-btn"
                  onClick={() => this.props.editTodo(item)}>
                  Edit
                </button>
              )}
              <button
                className="delete-cancel-btn"
                onClick={() => this.props.deleteTodo(item.id)}>
                Delete
              </button>
              <button
                className="toggle-btn"
                onClick={() => this.props.toggleCompleted(item.id)}
                title={
                  item.isCompleted ? "Mark as Pending" : "Mark as Completed"
                }>
                {item.isCompleted ? "Mark as Pending" : "Mark as Completed"}
              </button>
            </span>
          </>
        )}
      </li>
    );
  }
}

export default Homework_TodoItemClass;
