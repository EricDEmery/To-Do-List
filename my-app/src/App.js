import React, { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';
import Completed from './Completed';
import Navbar from './Navbar';

export default function App() {
  // Setting state variables with getters and setters
  const [page, setPage] = useState("To-Do");
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('ToDo')) || []);
  const [completedTasks, setCompletedTasks] = useState(() => JSON.parse(localStorage.getItem('CompletedTasks')) || []);

  const handleCheckboxChange = (task) => {
    //filters completed tasks into seperate array
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);

    //Adds task to completed tasks array
    const updatedCompletedTasks = [...completedTasks, task];
    setCompletedTasks(updatedCompletedTasks);
    
    //Saves to local storage
    localStorage.setItem('ToDo', JSON.stringify(updatedTasks));
    localStorage.setItem('CompletedTasks', JSON.stringify(updatedCompletedTasks));
  };

    //Function to clear tasks from local storage with the button
  const handleClearTasks = () => {
    setTasks([]);
    setCompletedTasks([]);
  
    localStorage.removeItem('ToDo');
    localStorage.removeItem('CompletedTasks');
  };

  //Saves task to storage when it changes
  useEffect(() => {
    localStorage.setItem('ToDo', JSON.stringify(tasks));
  }, [tasks]);

  if (page === "To-Do") {
    return (
      <>
        <Navbar setPage={setPage} />
        <Input setTasks={setTasks} />
        <List tasks={tasks} 
        setTasks={setTasks} 
        completedTasks={completedTasks} 
        setCompletedTasks={setCompletedTasks} 
        handleCheckboxChange={handleCheckboxChange} />
        <button type="button" onClick={handleClearTasks}>
          Clear Tasks
        </button>
      </>
    );
  } else if (page === "Completed") {
    return (
      <>
        <Navbar setPage={setPage} />
        <Completed completedTasks={completedTasks} />
        <button type="button" onClick={handleClearTasks}>
          Clear Tasks
        </button>
      </>
    );
  }
}
