import React from "react";
import { Button } from 'reactstrap';

function Header({name}){

    return (
      
<div style={{background:"pink",padding:"20",width:400}}>


    
        <h1>F.Y.B.COM Online Video Lectures</h1>
        <h1>{name}</h1>
        <p>i am developer developer</p>
        <p> Gradute Engineer</p>
        <Button outline color="secondary">Click here</Button>{' '}

</div>

    )

}

export default Header;