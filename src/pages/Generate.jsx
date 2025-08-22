import React from "react";
import Header from "../components/header";
import Infoheading from "../components/Infoheading";
import Ticket from "../components/Ticket";
import {Link} from "react-router-dom"

function Generate() {
  return (
    <div className="app">
      <Header />
      <Infoheading />
      <Ticket />



      <Link to="/">Prev</Link>
     
    </div>
  );
}

export default Generate;