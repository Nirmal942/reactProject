import React,{ useState } from "react"

function Form(){

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[address,setAddress]=useState("");
    function makeuser(){
      console.log('working====??s',age, address, name)
    }
    {
        let data={name,age,address}
        console.warn("called " ,data)

    }
     return(
         <div>
           <h1>Make a New username</h1>
           <input type="text"
            onChange={(e)=>setName(e.target.value)} 
            name="username"
             value="name"/>
           <br/><br/>
           <input type="text"
           onChange={(e)=>setAge(e.target.value)}
            name="age"
            value="age"/>
           <br/><br/>
           <input type="text"
           onChange={(e)=>setAddress(e.target.value)}
            name="address"
           value="address"/> 
           <br/><br/>
           <button onClick={makeuser}>Create User </button>

         </div>
     )
}
    
 export default Form;

