import React, { useState } from 'react';

export default function Input({ tasks, setTasks }) {
    //set state variables
  const [inputValue, setInputValue] = useState('');

  function userInput(e) {
    //updates input value with user input
    setInputValue(e.target.value);
  }

  function inputSubmit(e) {
    e.preventDefault();

    //checks if input is NOT empty and adds task to tasks array
    if (inputValue.trim() !== '') { //.trim removes whitespace
      setTasks((prevTasks) => [...prevTasks, inputValue]);

      setInputValue('');
    }
  }

  return (
    <div>
      <h1>To-Do</h1>
      <form onSubmit={inputSubmit}>
        <input
          className="row"
          id="col"
          type="text"
          value={inputValue}
          onChange={userInput}
          placeholder="Add a Task!"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

