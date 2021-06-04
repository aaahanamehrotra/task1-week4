import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const[myvar, setvar] = useState(0)
  const handleAdd = e => {
    e.preventDefault()
    setvar(myvar+1)
  }
  const handleSubtract = e => {
    e.preventDefault()
    setvar(myvar-1)
  }
  const handleChange = e => {
    e.preventDefault()
    setvar(Number(e.target.value))
  }
  return (
    <div className='App'>
      <div>
      {/* <form > */}
        <label>
          Variable:
          <input type="number" placeholder="" value={myvar} onChange={handleChange} />
        </label>
      {/* </form> */}
      </div>
      <div>
      <button onClick = {handleSubtract}>-</button>
      <span className="myVar">{myvar}</span>
      <button onClick = {handleAdd}>+</button>
      </div>
    </div>
  );
}

export default App;
