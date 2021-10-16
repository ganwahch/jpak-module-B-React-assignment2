// import logo from './logo.svg';
// let name="Ghanwa Khan";
// let address="Gulshan e Iqbal Karachi";
// let inst = "And I am Learning web & Mobile from Jawan Pakistan"
// function App() {
  
//   this.state={
//     name:"Ghanwa Khan",
//     address:"Gulshan e Iqbal Karachi",
//     inst:"And I am Learning web & Mobile from Jawan Pakistan"
//   }
  
//   return (
//   
//   );
// }

// export default App;





import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  render() {
    
  this.state={
    name:"Ghanwa Khan",
    address:"Gulshan e Iqbal Karachi",
    inst:"And I am Learning web & Mobile from Jawan Pakistan",
  }
  
    return (
<>

 <div className="navbar">
   <a class="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
   <a href="#"><i className="fa fa-fw fa-search"></i> Search</a>
   <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
   <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
 </div>
 <p>{this.state.name}</p>
 <p>{this.state.address}</p>
 <p>{this.state.inst}</p>


   </>    
   )
  }
}
