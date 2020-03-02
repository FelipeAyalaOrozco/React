import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './components/home'
import index from './components/index'
import React from "react";

function App () {
    return (
        <BrowserRouter>
          <Switch>
          <Route exact path='/' component={index}/>
          <Route exact path='/Home' component={Home}/>
          </Switch>
        </BrowserRouter>
      )
    }
export default App;
