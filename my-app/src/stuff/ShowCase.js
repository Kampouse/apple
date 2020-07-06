import  React, { useState, useContext } from 'react';
import styled from "styled-components";
import {StoreContext} from "./Reduce.js"
import { motion,useAnimation } from "framer-motion"
import Element from "./container.js"
import {BrowserRouter as Router,Switch,Route,Link,Match} from "react-router-dom";
const appearDuration = 10000;
const transitionName = `example`;


        

        


const AppleImage = styled.img`
width:300px;
height:300px;
opacity:1;
transition:5s;
`




let ShowCase = ({Match,location}) => {
const [state,dispatch] = useContext(StoreContext)
const controls = useAnimation()



return (<>

            


 

 

 <AppleImage  src={state.apple.image}></AppleImage>


<h1>{location.state}</h1>
<p>{state.apple.age}</p>
{console.log(Match)}




</>)
}
export  default ShowCase