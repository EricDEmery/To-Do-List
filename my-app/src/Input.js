import React, { useState } from 'react';

export default function Input({ tasks, setTasks }) {
  const [inputValue, setInputValue] = useState('');

  function userInput(e) {
    setInputValue(e.target.value);
  }

  function inputSubmit(e) {
    e.preventDefault();

    if (inputValue.trim() !== '') {
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

