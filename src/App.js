//import React from "react";
import logo from './imagenes/logo.webp'
import './App.css';
import ListTasks from './componentes/ListTasks';
//import ButtonCont from './componentes/ButtonCont';

function App() {
  return (
    <div className="task-manager">
      <div className='logo-container'>
        <img
        src={logo}
        className='logo'/>
      </div>
      <div className='main-task-list'>
        <h1>My tasks</h1>
        {/* <ButtonCont/> */}
        <ListTasks/>
      </div>
    </div>
  );
}

export default App;
