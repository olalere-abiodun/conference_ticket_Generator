import React from "react";
import Header from "../components/header";
import Heading from "../components/Heading";
import Form from "../components/Form";
import {Link} from "react-router-dom"


function Home() {
  return (
    <div className="app">
      <Header />
      <Heading />
      <Form />
      <Link to="/generate">Next</Link>
     
    </div>
  );
}

export default Home;