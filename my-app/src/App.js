import React, { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';
import Completed from './Completed';
import Navbar from './Navbar';

export default function App() {
  const [page, setPage] = useState("To-Do");
  // Define state variables for tasks and completedTasks
  // Retrieve tasks from local storage, or initialize an empty array if not found
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('ToDo')) || []);
  // Retrieve completedTasks from local storage, or initialize an empty array if not found
  const [completedTasks, setCompletedTasks] = useState(() => JSON.parse(localStorage.getItem('CompletedTasks')) || []);

  // Function to add a new task
  // Accepts a new task as input
  const addTask = (newTask) => {
    // Add the new task to the tasks state array
    setTasks([...tasks, newTask]);
  };

  // Function to handle checkbox change
  // Accepts the task to be updated as input
  const handleCheckboxChange = (task) => {
    // Filter out the completed task from the tasks array and update the tasks state
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
    // Add the completed task to the completedTasks state array
    setCompletedTasks([...completedTasks, task]);
  };

  const handleClearTasks = () => {
    // Clear tasks state and completedTasks state
    setTasks([]);
    setCompletedTasks([]);

    // Clear tasks and completedTasks from local storage
    localStorage.removeItem('ToDo');
    localStorage.removeItem('CompletedTasks');
  };

  // Save tasks and completedTasks to local storage when they change
  useEffect(() => {
    // Save the tasks state array to local storage
    localStorage.setItem('ToDo', JSON.stringify(tasks));
    // Save the completedTasks state array to local storage
    localStorage.setItem('CompletedTasks', JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);


  // return (
  //   <>
  //     <Input addTask={addTask} />
  //     <List tasks={tasks} handleCheckboxChange={handleCheckboxChange} />
  //     <Completed completedTasks={completedTasks} />
  //   </>
  // );
  if (page === "To-Do") {
    return (
      <>
      <Navbar setPage={setPage} />
        <Input addTask={addTask} />
        <List tasks={tasks} handleCheckboxChange={handleCheckboxChange} />
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
