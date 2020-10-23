import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Index from './Components/Index/Index';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import './App.css';

class App extends Component{
  render(){
    return (
      <BrowserRouter>    
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/Contact" component={Contact} />    
      </BrowserRouter>
    );
  }
}

export default App;
