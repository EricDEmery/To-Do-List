import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';


export default function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("ToDo")) || [];
  }); //Checks local storage for items to render, returns a blank array if local storage is empty

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  
  const [status, setStatus] = useState(tasks) // Will set task status

  useEffect(() => { localStorage.setItem("ToDo", JSON.stringify(tasks));
}, [tasks]); // Tells browser to update local storage when ToDo changes, makes items a string so they can be stored

return (
  <>
  <Input setTasks = {setTasks}/>
  <List tasks={tasks}/>
  </>
);
}

