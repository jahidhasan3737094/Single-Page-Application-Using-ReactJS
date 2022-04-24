import React from 'react';
//bootstrap
import { NavLink } from "react-router-dom";

//axios for xml request
import axios from 'axios';
//xml file reader
import XMLParser from 'react-xml-parser';
class Body extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
     
        author: [],
        date:[],
        title:[],
        summary:[],
        body:[],
      
              }
             
      }
    componentDidMount() {
     //get data request
      axios.get('/assets/blog2.xml', {
        "Content-Type": "application/xml; charset=utf-8"
       }).then(res => 
        {
        //Storing users detail in state array object
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        
      
        this.setState({ author: jsonDataFromXml.getElementsByTagName('author'),
                        date: jsonDataFromXml.getElementsByTagName('date'),
                        title: jsonDataFromXml.getElementsByTagName('title'),
                        summary: jsonDataFromXml.getElementsByTagName('summary'),
                        body: jsonDataFromXml.getElementsByTagName('body'), })
       
       
       
           }); 
    }
 
  render() {
  
    return (
    
      <div >
       <div class="mainSection">
        <div className="row">
        <div class="column" >
        <nav class="sidebar">
        <NavLink exact to="/"className="listItem"activeClassName="activeItem">Home</NavLink>
        
        </nav>
        </div>
        <div class='column'>
       {(
      this.state.title.map((item, index) => {
        return (
          <h1 class="list-group-item">{item.value}</h1>
        )
        }
        
      ))}
        {(
      this.state.author.map((item, index) => {
        return (
          <p >{item.value}</p>
        )
        }
        
      ))}
    
    {(
      this.state.date.map((item, index) => {
        return (
          <p class="list-group-item">{item.value}</p>
        )
        }
        
      ))}
   
   
      {(
      this.state.summary.map((item, index) => {
        return (
          <p class="list-group-item">{item.value}</p>
        )
        }
        
      ))}

{(
      this.state.body.map((item, index) => {
        return (
          <p class="list-group-item">{item.value}</p>
        )
        }
        
      ))}
      </div>
      </div>
      </div>
    </div>
     
)
};
}
export default Body;