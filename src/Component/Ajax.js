import React from "react";
import { NavLink } from "react-router-dom";
import Api from "./Api";
const Ajax=()=>{
    return(
        <>
        
        <div class="mainSection">
        <div className="row">
        <div class="column" >
        <nav class="sidebar">
        <NavLink exact to="/"className="listItem"activeClassName="activeItem">Home</NavLink>
        </nav>
        </div>
        <div class="column">
        <Api/>
        
        </div>
            
           
        
        </div>
        
       
      
        </div>
        </>
    )
}
export default Ajax;