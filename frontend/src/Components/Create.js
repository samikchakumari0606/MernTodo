import React,{useState} from 'react';
import axios from "axios";

const Create = () => {

  const [task,setTask]=useState()

  const handleAdd=()=>{
    
      axios.post("http://localhost:5000/add",{task:task})
      .then(result=>console.log(result))
      // .then(result=>{
      //   location.reload()
      // })
      .catch(err=>console.log(err))
  }

  return (
    <div>
        <input type="text" placeholder='add your task' onChange={(e)=>setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd}>submit</button>
    </div>
  )
}

export default Create
