import  React, { useState, useContext } from 'react';
import styled from "styled-components";
import {BrowserRouter as Router,Switch,Route,Link,Match} from "react-router-dom";
import {StoreContext} from "./Reduce.js"
const Nav = styled.ul`

position: relative;
  list-style-type: none;
display:flex;
justify-content: space-around;
  padding: 0;
  border-bottom:solid 1px black;
  overflow: hidden;
`;
const NavElement  = styled.li`
  padding: 0.5em;
  padding-left:6%;
  padding-right:7%;
  float:left;
  text-align: center;
  font-size:15px;
  width:max-content;
  border-right:solid 1px black;
  background-color: papayawhip;
  height:auto;
  transition:3s;
  :hover
  {
background-color:	#e8dab6;
transition:3s;
  }
  :last-child{
    border-left:none;
    border-right:none;
  }
`;
 
let Navigation = () => {
  const [state,dispatch] = useContext(StoreContext)
  return(
   
  <Nav>
   
   
    
    <NavElement> button</NavElement>
   

    <NavElement  onClick = {() => {dispatch({type:"Ben Davis apple"})}}> <Link to={"/Apple/:location"   } >Ben davis</Link> </NavElement>
    <NavElement  onClick = {() => {dispatch({type:"Catshead"})}}> <Link to={"/Apple/:state"} >Ben davis</Link> </NavElement>
    <NavElement  onClick = {() => {dispatch({type:"Discovery"})}}> <Link to={"/Apple/:state"} >Ben davis</Link> </NavElement>
   <NavElement  onClick = {() => {dispatch({type:"Fuji"})}}> <Link to={"/Apple/:state"} >Ben davis</Link> </NavElement>
 
   </Nav>)
}
export default Navigation;