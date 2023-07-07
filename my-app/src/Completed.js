import React from 'react';


export default function Completed({ completedTasks }) {
  
  return (
    <div>
      <h1>Completed Tasks</h1>
      {completedTasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
        </div>
      ))}
    </div>
  );
}
