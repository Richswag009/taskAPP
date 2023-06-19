import TaskForm from "./TaskForm";
import Card from "../utils/Card/Card";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SingleTask  from "./SingleTask";
import  {getLocalStorageItem}  from "../utils/utils";
uuidv4()


const Tasks = () => {
const [tasks, setTask] = useState(getLocalStorageItem())

 

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(tasks));
  }, [tasks]);

  // Add Tasks functionality
  function onAddTask(task) {
    const newTask = { id: uuidv4(), ...task, completed: false };
    setTask([...tasks, newTask]);
    //  localStorage.setItem("list", JSON.stringify(tasks));
  }

  // function to delete a task
  const onDelete = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  // to change the status of a task
  const toggleComplete = (id) => {
    setTask(tasks.map(task=> task.id === id ? { ...task, completed: !task.completed} : task))
  };
  const clearList=()=>{
    setTask([])
  }

  const allTasks = tasks.map((task,i) => (
    <SingleTask
      key={i}
      task={task}
      onDelete={onDelete}
      toggleComplete={toggleComplete}
    />
  ));


  return (
      <Card>
        <h1>Task App</h1>
        <TaskForm 
        onAddTask={onAddTask} 
        />

        {allTasks.length < 1 ?
        <p className='message'>No Task yet </p>
        : 
        <div>{allTasks}</div>
        }
        {tasks.length > 0 ?
          <button className='clearList' onClick={clearList}>Clear List</button>:''}
      </Card>
  )
};

export default Tasks;
