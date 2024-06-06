import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const MyTask = ({text, updatingInInput, deleteTask}) => {
  return (
    <div>
        <p>{text}</p>
        <AiFillEdit onClick={updatingInInput}/>
        <MdDelete onClick={deleteTask}/>
    </div>
  )
}

export default MyTask



