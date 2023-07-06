import React from 'react'
import {useState} from 'react'

export default function Input({tasks, setTasks}) {
   const [inputValue, setInputValue] = useState('');

   function userInput(e) {
    setInputValue(e.target.value);
   }

    function inputSubmit(e) {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            setTasks(userInput);

            setInputValue('')
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
            </form>
        </div>
        
      )
    }
    
