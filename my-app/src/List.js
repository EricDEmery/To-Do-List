import React from 'react'

export default function List({ tasks }) {
    return (
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            {task}
          </div>
        ))}
      </div>
    );
  }
  