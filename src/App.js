import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

// import { Button } from "reactstrap";
import Navbar from './Components/Navbar';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Toast, Container, Row, Col } from 'reactstrap';
// import { button, Form, FormGroup, Label, Input } from 'reactstrap';


import { Jumbotron, Button } from 'reactstrap';

import Cross from './Components/Cross'
import { button } from 'reactstrap';
import Reactmenu from "./Components/Reactmenu";
import {ToastContainer,toast} from "react-toastify";
import {ListGroupItem,ListGroup} from "reactstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Table } from 'reactstrap';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
//import { ListGroup, ListGroupItem } from 'reactstrap';

import Form from './Components/Form'
//import { Button } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
//import useStyles from './Components/Searchbar'
import Ourmission from './Components/Ourmission'
import Searchbar from './Components/Searchbar'

import Example from './Components/Example'
import VerticalTabs from './Components/Cross'

import Ccards from './Components/WithStyles'

import HideAppBar from './Components/Appbar'


import { Icon, Image } from 'semantic-ui-react'

import Kards from './Components/Kards'



import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';




import Aboutus from './Components/Aboutus'


import LoginForm from './Components/LoginForm'

function App(){

  return(
   <>
         <hr/>
      <Searchbar/>
      <hr/>


     <>


<Router>
<h2>We are providing you one of the best platform for BCOM Students </h2>

<ToastContainer/>
     <Container>
         <Row>
           <Col md={4}>
             <Reactmenu/>

           </Col>
           <Col md={8}>
           <Route path="/Home" component={Example} exact/>
           <Route path="/Add-course" component={Header} exact/>
           <Route path="/Contact us" component={Cross} exact/>
           <Route path="/Aboutus" component={Aboutus} exact/>
           
           </Col>
         </Row>
    </Container>

       </Router> 
      <>
      
      </>

      </>
      <hr/>

      <hr/>
    <Ourmission/>
    <hr/>
    <VerticalTabs/>
    <hr/>
  
    <Ccards/>
    <hr/>
      <Form/>
      <hr/>

       <hr/>
      <Example/>
      <hr/>


      <hr/>
      <Navbar/>
       <hr/>
       <Header name="Andy flower"/>
       <hr/>
       <Header name="Rashid khan"/>
       <hr/>
       <Header name="R Ashwin"/>
       <hr/>
       <Header name="jofra archer"/>
       <hr/>
       <Header name="Nirmal nice"/>
       <hr/>
       <Kards/>
       <hr/>
       <Aboutus/>
         <hr/>
         <LoginForm/>
           <hr/>



   </>

  );

}

export default App;
