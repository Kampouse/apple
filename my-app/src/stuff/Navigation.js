import  React, { useState } from 'react';
import styled from "styled-components";

const Nav = styled.ul`

position: relative;
  list-style-type: none;
display:flex;
justify-content: flex-start;
  padding: 0;
  border-bottom:solid 1px black;
  
  overflow: hidden;
`;
const NavElement  = styled.li`
  padding: 0.5em;
  padding-left:5%;
  padding-right:5%;
  float:left;
  text-align: center;
  font-size:15px;
  border-left:solid 1px black;
  border-right:solid 1px black;
  background-color: papayawhip;
  height:auto;
  transition:3s;
  :hover
  {
background-color:	#e8dab6;
transition:3s;


  }
`;
 
let Navigation = () => {
  return(
  <Nav>
    <NavElement> button</NavElement>
   <NavElement onClick = {() => {console.log("ff")}}>Ben Davis apple </NavElement>
   <NavElement>Catshead</NavElement>
   <NavElement>Discovery</NavElement>
   <NavElement> Fuji</NavElement>
    <NavElement></NavElement>
   </Nav>)
}
export default Navigation;