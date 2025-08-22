import React, { useState } from "react";
import Header from "../components/header";
import Infoheading from "../components/Infoheading";
import Ticket from "../components/Ticket";
import Form from "../components/Form";
import {useLocation} from "react-router-dom";

function Generate() {
  // const [ticketData, setTicketData] = useState(null);

  // const handleFormSubmit = (data) => {
  //   setTicketData(data); // save the form data to state
  // };
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="app">
      <Header />
      <Infoheading data={formData} />
      <Ticket data={formData} />
    </div>
  );
}

export default Generate;
