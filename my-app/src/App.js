import React, { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';
import Completed from './Completed';

export default function App() {
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

  // Save tasks and completedTasks to local storage when they change
  useEffect(() => {
    // Save the tasks state array to local storage
    localStorage.setItem('ToDo', JSON.stringify(tasks));
    // Save the completedTasks state array to local storage
    localStorage.setItem('CompletedTasks', JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  // Render the components
  return (
    <>
      {/* Render the Input component and pass the addTask function as a prop */}
      <Input addTask={addTask} />
      {/* Render the List component and pass the tasks and handleCheckboxChange function as props */}
      <List tasks={tasks} handleCheckboxChange={handleCheckboxChange} />
      {/* Render the Completed component and pass the completedTasks as a prop */}
      <Completed completedTasks={completedTasks} />
    </>
  );
}
