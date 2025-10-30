import React from "react";
import { useState, useCallback } from "react";

const TodoItem = React.memo(({ todo, toggleTodo, removeTodo }) => {
  console.log(`Rendering TodoItem: ${todo.text}`);

  return (
    <li
      className={`todo-item ${
        todo.itemCompleted ? "completed" : ""
      } justify-center items-center`}
    >
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.itemCompleted ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} className="remove-btn">
        &times;
      </button>
    </li>
  );
});

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form m-10">
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 border-cyan-900 p-2 rounded-md text-slate-700 placeholder:text-slate-400"
      />
      <button type="submit" style={{ width: "120px" }}>
        Add Task
      </button>
    </form>
  );
};

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Hooks", itemCompleted: true },
    { id: 2, text: "Build a ToDo App", itemCompleted: false },
    { id: 3, text: "Deploy the App", itemCompleted: false },
  ]);
  const [nextId, setNextId] = useState(4);

  const addTodo = useCallback(
    (text) => {
      const newTodo = {
        id: nextId,
        text,
        itemCompleted: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNextId((prevId) => prevId + 1);
    },
    [nextId]
  );

  // Function for completion status
  const toggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, itemCompleted: !todo.itemCompleted } : todo
      )
    );
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className="todo-list-app flex flex-col justify-center items-center my-40 border-3 border-amber-600 rounded-md p-5">
      <h1 className="text-black font-bold text-3xl font-mono">ToDo List 📝</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 ? (
        <ul className="todo-list text-slate-600">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      ) : (
        <p className="empty-message text-slate-700">Add something.</p>
      )}
    </div>
  );
};

export default ToDoList;
