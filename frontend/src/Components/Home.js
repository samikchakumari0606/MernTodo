import React,{useState,useEffect} from 'react';
import Create from './Create';
import axios from "axios";


const Home = () => {
    const[todos,setTodos]=useState([])

    useEffect(()=>{
      axios.get("http://localhost:5000/get")
      .then(result=>setTodos(result.data))
      .catch(err=>console.log(err))

    },[])

    const handleEdit=(id)=>{
      axios.put("http://localhost:5000/update/"+id)
      .then(result=>console.log(result))
      // .then(result=>{
      //   location.reload()
      // })
      .catch(err=>console.log(err))
    }


    const handleDelete=(id)=>{
      axios.delete("http://localhost:5000/delete/"+id)
      .then(result=>console.log(result))
      // .then(result=>{
      //   location.reload()
      // })
      .catch(err=>console.log(err))
    }

  return (
    <div>
        <h1>Todo list home page</h1>
        <Create/>
        {
            todos.length==0
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo=>(
                  <div style={{border:"2px solid red"}} onClick={()=>handleEdit(todo._id)}>
                   
                   <p>{todo.task}</p> 
                   <button onClick={()=>handleDelete(todo._id)}>delete task</button>
                 </div>
            ))
        }
    </div>
  )
}

export default Home
