import React from 'react';
import { Route, Redirect,Link } from "react-router-dom";

class index extends React.Component{
     
    render(){
        return(
            <div class="text-center primary ">

            <div class="cover-container d-flex h-100 p-3 mx-auto flex-column ">
         
        
              <main role="main" class="inner cover dimScreen">
              <div>
                 
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h1 class="cover-heading ">Memes templates</h1> <br></br>
                <p class="lead">Powered by <a href="https://api.imgflip.com">imgflip.com</a></p>
                <p class="lead">
               <Link to ="/Home" className="btn btn-outline-primary"> See more</Link>
                </p>
              </main>
        
              
            </div>
        
           
        </div>
           
        )
        
            
    }
}



export default index;