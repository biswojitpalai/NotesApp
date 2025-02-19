import React, { useState } from "react";
import { useTodo } from "../Context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
     
    if (todo.trim()) {
      addTodo(todo); // Pass the new todo title
      setTodo("");
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 focus:ring-2 focus:ring-green-600 hover:scale-105"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:scale-105 duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
