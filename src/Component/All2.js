import React from 'react';
//bootstrap
//import { NavLink } from "react-router-dom";
//import { Link } from 'react-router-dom'
import axios from 'axios';
//xml file reader
import XMLParser from 'react-xml-parser';
import { Link } from 'react-router-dom';
class All2 extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
     
        author: [],
        date:[],
        title:[],
        image_path:[],
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
                        image_path: jsonDataFromXml.getElementsByTagName('image_path'),
                        summary: jsonDataFromXml.getElementsByTagName('summary'),
                        body: jsonDataFromXml.getElementsByTagName('body'), })
       
       
       
           }); 
    }
 
  render() {
  
    return (
    
      
      
        <ul class="list-group">
      
        {(
      this.state.title.map((item, index) => {
        return (
          <li class="list-group-item"> <h1><Link exact to="/Post2">{item.value}</Link></h1></li>
        )
        }
      ))}

{(
      this.state.date.map((item, index) => {
        return (
          <li class="list-group-item">{item.value}</li>
        )
        }
      ))}

{(
      this.state.author.map((item, index) => {
        return (
          <li class="list-group-item">{item.value}</li>
        )
        }
      ))}

       {(
      this.state.image_path.map((item, index) => {
        return (
          <li class="list-group-item">{item.value}</li>
        )
        }
      ))}

      {(
      this.state.summary.map((item, index) => {
        return (
          <li class="list-group-item">{item.value}</li>
        )
        }
      ))}

      
    </ul>
    
   
)

};
}
export default All2;