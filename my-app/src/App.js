import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';


export default function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("ToDo")) || [];
  }); //Checks local storage for items to render, returns a blank array if local storage is empty
  
  const [status, setStatus] = useStat(To-Do)
  useEffect(() => { localStorage.setItem("ToDo", JSON.stringify(ToDo));
}, [ToDo]); // Tells browser to update local storage when ToDo changes, makes items a string so they can be stored

return (

);
}

