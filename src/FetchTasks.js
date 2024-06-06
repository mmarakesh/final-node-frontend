import axios from 'axios';

//отображаем весь список продуктов из базы данных
const getAllTasks = (setTasks) => {
axios.get("https://project-node-backend.onrender.com")
.then(({data}) => {console.log(data)
setTasks(data);
})
}

// соединяем input и кнопку ADD
const addTask = (title, setTitle, setTasks) => {
    axios.post("https://project-node-backend.onrender.com/saveTask", {title})
    .then((data) => 
    {console.log(data)
    setTitle("")
    getAllTasks(setTasks)
    }) 
}

//редактируем написанный текст
const editTask = (taskId, title, setTasks, setTitle, setEditing) => {
    axios.put("https://project-node-backend.onrender.com/editTask", {_id:taskId, title})
    .then((data) => 
    {console.log(data)
    setTitle("")
    setEditing(false)
    getAllTasks(setTasks)
    }) 
}

//удаляем
const deleteTask = (_id, setTask) => {
    axios.post("https://project-node-backend.onrender.com/deleteTask", {_id})
    .then((data) => 
    {console.log(data)
    getAllTasks(setTask)
    }) 
}


export {getAllTasks, addTask, editTask, deleteTask};









