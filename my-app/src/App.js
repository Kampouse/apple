import React, {useReducer,useContext} from 'react';
import axios from "axios"
import logo from './logo.svg';
import './App.css';
import  Navigation from "./stuff/Navigation.js"
import {StoreContext} from "./stuff/Reduce.js"
import { useForm } from "react-hook-form";
import ShowCase from "./stuff/ShowCase.js"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  const [state,dispatch] = useContext(StoreContext)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => axios.post( "http://localhost:4000/api/help",{name:data.name,year:data.year,avaible:true}).then((response) => { console.log(response)})

  return (
    <Router>
     
    
    <div className="App">
    <button onClick = { () => {  axios.post( "http://localhost:4000/api/help",{name:"dog",year:"2001",avaible:true}).then((response)=>{console.log(response)})}}>hi</button>
    <Route  exact path="/">

    </Route>
      <Navigation />
      <Switch>
      <form onSubmit={handleSubmit(onSubmit)}>
 

    
      <input name="name" defaultValue="test" ref={register} />
      <input name="year" defaultValue="year" ref={register} />
    
      <input type="submit" />
    </form>
      
      <Route path={"/Apple/:state"}  component={ShowCase}/> 
      
      
    
    
   </Switch>
    </div>

    
    </Router>
  );
}

export default App;
