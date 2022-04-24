import React from "react";
import { NavLink } from "react-router-dom";
import All from "./All";
import All2 from "./All2";
import {Routes,Route } from 'react-router-dom';
import Body from "./Body";
import '../CSS/listStyle.css';
const Home=()=>{
    return(
        <>
        
        <Routes>
   
         <Route path="/Body" component={Body}/>
   
         </Routes>
   
        <div className="row">
        <div class="column" >
        <nav class="sidebar">
        <NavLink exact to="/Ajax"className="listItem"activeClassName="activeItem">Home</NavLink>
        </nav>
        </div>
        <div class="column">
       
        <All/>
        <br/>
        <All2/>
        </div>
            
        </div>
        
       
      
       
        </>
    )
}
export default Home;
