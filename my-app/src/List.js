import React from 'react';

export default function List({ tasks, setTasks, completedTasks, setCompletedTasks, handleCheckboxChange }) {

//   const handleCheckboxChange = (task) => {
//     const updatedTasks = tasks.filter((t) => t !== task);
//     setTasks(updatedTasks);

//     const updatedCompletedTasks = [...completedTasks, task];
//     setCompletedTasks(updatedCompletedTasks);

//     localStorage.setItem('ToDo', JSON.stringify(updatedTasks));
//     localStorage.setItem('CompletedTasks', JSON.stringify(updatedCompletedTasks));
 // };

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
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