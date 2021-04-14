import React from 'react';
import { Link } from 'react-router-dom';
import {ListGroupItem,ListGroup} from "reactstrap";


const Menu = ()=>{
 
    return (
        <>  
        
        <ListGroup  >
          <Link style={{borderColor:"aqua",padding:"20",width:400}} className ="list-group-item list-group-item-action" tag="a" to="/Home" action>
              HOME</Link>  
              <Link style={{color:"orange",padding:"20",width:400}} className="list-group-item list-group-item-action"  tag="a" to="/Add-course" action>
              ADD COURSE</Link>  
              <Link style={{color:"purple",padding:"20",width:400}} className="list-group-item list-group-item-action"  tag="a" to="/Contact us" action>
              Contact us</Link>
              <Link style={{color:"green",padding:"20",width:400}} className="list-group-item list-group-item-action"  className="list-group-item list-group-item-action" tag="a" to="Cards"  action>
              MAIL US</Link>  
              <Link  style={{color:"lemon green",padding:"20",width:400}} className="list-group-item list-group-item-action"  tag="a" to="/Contact us" action>
              ABOUT US</Link>  
              <Link style={{color:"hotpink",padding:"20",width:400}}  className="list-group-item list-group-item-action"  tag="a" to="/Add-course" action>
              OUR MISSION </Link>  
              <Link style={{color:"black",padding:"20",width:400}} className="list-group-item list-group-item-action"  tag="a" to="/Home" action>
              PRODUCTS</Link>  
              <Link style={{color:"aqua",padding:"20",width:400}} className="list-group-item list-group-item-action"  tag="a" to="/Contact us"action>
              ABOUT US</Link>  

        </ListGroup>
    
        </>
    );

};

export default Menu;
