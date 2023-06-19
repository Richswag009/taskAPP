import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();
    onAddTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={addTaskHandler}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Enter Title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="description"
        value={description}
        placeholder="Enter Description"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="addTask__button">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
