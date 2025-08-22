import React from "react";

function Infoheading({data}) {
  const { avatarFile, fullName,email, github } = data;
  return (
    <div>
        <h1 className="heading">Congrats, <span>{fullName || "Your Name"}</span>! Your ticket is ready.</h1>
        <p className="description" style={{width: "430px"}}>We've emailed your ticket to <span>{email || "Your Email"}</span> and will send updates in the run up to the event </p>
    </div>
  );
}

export default Infoheading;