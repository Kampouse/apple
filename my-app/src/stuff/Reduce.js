import React, {createContext,useReducer} from 'react';
import {Listing} from "./AppleStates.js"
export const StoreContext = createContext({});
const [Apple1,Apple2,Apple3,Apple4] = Listing
const  initialState = { apple: Apple1}
function reducer(state,action){

    switch(action.type){
    case "Ben Davis apple":
        return {apple:Apple1
        
        }
    case "Catshead":  
        return {apple:Apple2}
    case "Discovery": 
        return {apple:Apple3}
    case "Fuji": 
        return {apple:Apple4}
   

    default: throw new Error("Action not define") 
   }
} 

const Store  = ({children}) => {
const [state,dispatch] = useReducer(reducer,initialState)
return(
<StoreContext.Provider value = {[state,dispatch]}>{children}</StoreContext.Provider>)
}
export default Store;