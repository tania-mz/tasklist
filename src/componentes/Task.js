import React from "react";
import "../style-sheet/task.css"
import { FaTrashCan } from "react-icons/fa6";

function Task ( { id, text, completed, completeTask, deleteTask }) {
  return (
    <div className={completed ? "task-cont completed": "task-cont"}>
      <div
      onClick={() => completeTask(id)} 
      className="task-text">
        {text}
      </div>
      <div 
      onClick={() => deleteTask(id)}
      className="icon-task-cont">
        <FaTrashCan className="icon-task" color="dark-blue"/>
      </div>
    </div>
  )
}

export default Task;
