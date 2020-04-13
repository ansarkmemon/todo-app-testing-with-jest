import React from "react";

const TodoItem = ({ todo, markCompleted }) => {
  const handleComplete = (todoId) => {
    markCompleted(todoId);
  };
  if (todo.completed) return null;
  return (
    <div className="item list-item" style={todoItemStyles}>
      <div className="content" style={{ flex: 2 }}>
        <div className={`ui checkbox ${todo.completed && "checked"}`}>
          <input
            id={todo.id}
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => handleComplete(todo.id)}
          />
          <label htmlFor={todo.id}>{todo.content}</label>
        </div>
      </div>
      <div className="right floated content">
        <button className="ui button icon red">
          <i className="trash icon"></i>
        </button>
      </div>
    </div>
  );
};

const todoItemStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default TodoItem;
