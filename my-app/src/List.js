import React from 'react';


export default function List({ tasks, setTasks }) {
  // Define handleCheckboxChange function
  const handleCheckboxChange = (task) => {
    // Filters out the completed tasks
    const updatedTasks = tasks.filter((t) => t !== task);
   
    setTasks(updatedTasks);

    // Keeps track of existing completed tasks
    const completedTasks = JSON.parse(localStorage.getItem('CompletedTasks')) || [];
    // Moves tasks to completed in local storage once check box is clicked
    localStorage.setItem('CompletedTasks', JSON.stringify([...completedTasks, task]));
  };


  return (
    <div>
      {/* Renders each task in the array */}
      {tasks.map((task, index) => (
        <div key={index}>
          {/* checkbox for the list */}
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(task)}
          />
          <span>{task}</span>
        </div>
      ))}
    </div>
  );
}