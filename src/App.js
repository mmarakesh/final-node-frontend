import React, { useEffect, useState } from 'react'
import './App.css'
import MyTask from './MyTask'
import { addTask, getAllTasks, editTask, deleteTask} from './FetchTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    getAllTasks(setTasks)
  }, [])

  //предусматриваем случай когда в input появится текст для редактирования
  const updatingInInput = (_id, title) => {
  setEditing(true)
  setTitle(title)
  setTaskId(_id)
  }
  
  return (
    <div>
      <h1>Weekly</h1>
      <h2>planner</h2>

      <input
      type="text"
      placeholder="Add a task"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <button
      disabled = {!title}
      onClick={editing 
      ? () => editTask(taskId, title, setTasks, setTitle, setEditing) 
      : () => addTask(title, setTitle, setTasks)}>

      {editing ? "Edit" : "Add"} 

      </button>
       {/* <MyTask text="We got here!!!"/> */}
      {tasks.map((task) => 
      <MyTask text={task.title} key={task._id}
      updatingInInput= {() => updatingInInput(task._id, task.title)}
      deleteTask={() => deleteTask(task._id, setTasks)}/>
      )}
    </div>
  )
}

export default App;


