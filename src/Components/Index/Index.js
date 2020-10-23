import React,{Component} from 'react';
import Home from './../Home/Home';
import About from './../About/About';
import Profile from './../Profile/Profile';
import Work from './../Work/Work';
import Portofolio from './../Portofolio/Portofolio';
import Footer from './../Footer/Footer';
import SocialMedia from './../SocialMedia/SocialMedia';

class Index extends Component{
  render(){
    return (
      <div className="App">
        <Home />
        <Work />
        <Portofolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
