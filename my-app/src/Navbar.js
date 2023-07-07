import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link active" onClick={() => props.setPage("To-Do")} aria-current="page">To-Do</button>
          </li>
          <li className="nav-item">
            <button className="nav-link active" onClick={() => props.setPage("Completed")} aria-current="page">Completed</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}