import React from  'react';
import  {useState} from 'react'

const LoginForm =()=>{
      const [email,setEmail] = useState("");
      const [password,setpassword] = useState("");

      const[allEntry,setallEntry]= useState([]);

      const submitForm=(e)=>{
            e.preventdefault();  

          const newEntry ={email:email,password:password};

          setallEntry([...allEntry,newEntry]);
          console.log(allEntry);
      }

  return(
      <>

      <form action="" onSubmit={submitForm}>
          <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" autoComplete="off"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>

          </div>

          <div>
              <label htmlfor="password">password</label>
              <input type="text" name="password"  id="password" autoComplete="off"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}/>

          </div>

          <div>
              <label htmlFor="password">password</label>
              <input type="text" name="password" id="password" autoComplete="off"
              value={password}
              onChange={(e)=>setEmail(e.target.value)}/>

</div>


          <button  type="submit">Login</button>

 </form>
 <div>
      {
          allEntry.map((curElem)=>{
              return(
                  <div className="showDataStyle">
                      <p>{curElem.email}</p>
                      <p>{curElem.password}</p>
                      </div>
              )
          
      })
    }
    </div>

 </>
      
  )


}
 
export default LoginForm;