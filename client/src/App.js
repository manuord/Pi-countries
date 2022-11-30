import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from './components/Home/Home.jsx'
// import NavBar from "./component/NavBar/NavBar.jsx";
import Tourism from './components/Tourism/Tourism.jsx'
import Details from "./components/Details/Details.jsx";
// import Card from './components/Cards/Card.jsx'

function App() {
  return (
    <div className="App">
      {/* <Route path='/' component={NavBar}/> */}
      <Route exact path="/" component={LandingPage}/>
      {/* <Route exact path='/countries' component={Card}/> */}
      <Route exact path='/country/:id' component={Details}/>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/Tourism' component={Tourism}/>


    </div>
  );
}

export default App;
