import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/home'
import React from "react";

function App () {
    return (
        <BrowserRouter>
          <Switch>
          <Route exact path='/' component={Home}/>
            <Route exact path='/Home' component={Home}/>
          </Switch>
        </BrowserRouter>
      )
    }
export default App;
