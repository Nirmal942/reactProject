import React, {useState} from 'react'
function CreateUser(){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [address,setAddress]=useState("");
    function makeuser(){
        console.warn("called")
    }
    return(<div>
            <h1>Make A NEW USER</h1>
            <input type="text" onChange={(e)=> setName(e.target.value)}
            name="username"
            value={name}/>
            <br/>  <br/>

            <input type="text" 
            onChange={(e)=> setName(e.target.value)}
            name="age"
            value={age}/>
            <br/>  <br/>
            <input type="text"
            name="address"
            onChange={(e)=>setAddress(e.target.value)}
            value={address}/>
            <br/>  <br/>
           <button onClick={makeuser}>CreateUser</button>

    </div>)

}