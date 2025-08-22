import React from "react";

function Infoheading() {
  return (
    <div>
        <h1 className="heading">Congrats, <span>Jonathan Kristof!</span> Your ticket is ready.</h1>
        <p className="description" style={{width: "430px"}}>We've emailed your ticket to <span>Jonathan@email.com</span> and will send updates in the run up to the event </p>
    </div>
  );
}

export default Infoheading;