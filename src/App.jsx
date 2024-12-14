import React, { useState } from "react";

function App() {
 const[todo ,setTodo] = useState([])

 const addTask = ()=>{
  const newTask = `Tasks ${todo.length + 1}`
  setTodo((prev)=>[...prev , newTask])
 }

 const removeTask  =()=> {
  setTodo((prev)=>prev.slice(0,-1))
 }


  return (
    <>
    <div>
      <h2>ToDO List </h2>
      <ul>
        {todo.map((to , index)=>(
          <li key={index}>{to}</li>
        ))}
      </ul>
      <button onClick={addTask}>Add Task</button>
      <button onClick={removeTask}>Remove Task</button>
    </div>
    </>
  );
}

export default App;
