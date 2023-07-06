import React from 'react'

export default function Input() {
    const taskRef = useRef(null)
  return (
    <div>
        <input
        className="row inputrow"
        id="col"
        ref="taskRef"
        type="text"
        placehoder="Add a task!"
        />
    </div>
  )
}
