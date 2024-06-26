import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../style-sheet/ListTasks.css";
import { Button } from "./Button";

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Estado para el filtro

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    } else {
      return true; 
    }
  });

  const addTask = (task) => {
    //console.log(task);
    if (task.text.trim()) {
      console.log(tasks)
      task.text = task.text.trim();
      const actualizedTask = [task, ...tasks];
      setTasks(actualizedTask);
    }
  };
  const deleteTask = id => {
    const actualizedTask = tasks.filter(task => task.id !== id);
    setTasks(actualizedTask);
  }
  const completeTask = id => {
    const actualizedTask = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        console.log(task.completed)
        return task;
  })
  setTasks(actualizedTask);
  }

  return (
    <>
      <TaskForm onSumbit={addTask} />
      <div className = "button-container">
        <Button 
          text="Completed"
          onClick={() => setFilter('completed')}
        />
    
        <Button
          text="Pending"
          onClick={() => setFilter('pending')}
        />
        <Button
          text="All"
          onClick={() => setFilter('all')}
        />
      </div>
      <div className="task-list-cont">
        {filteredTasks.map(task =>
          <Task
            text={task.text}
            completed={task.completed}
            key={task.id}
            id={task.id}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )}
      </div>
    </>
  );
}
export default ListTasks;
