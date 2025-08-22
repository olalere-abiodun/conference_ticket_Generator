import React, {useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Avatar from "./Avatar";

function Form() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("")

  function checkEmail(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const valid = /\S+@\S+\.\S+/.test(emailValue);
    setError(!valid);
  }
  
  return (
   <form action="">
        <Avatar />
        <Label text="Full Name" />
        <Input
          className="input"
          type="text"
        />
        <Label text="Email Address" />
        <Input
          className={`input ${error ? "error" : ""}`}
          type="email"
          value = {email}
          placeholder="example@email.com"
          onChange = {checkEmail}
        />
        <div className="avatar-error" style={{ display: error ? "flex" : "none" }}>
            <img src="/assets/images/icon-info.svg" alt="User Avatar" />
            <span>Please enter a valid e-mail</span>
        </div>
        <Label text="GitHub Username" />
        <Input
          className="input"
          type="text"
          placeholder="@yourusername"
        />
        <Input
          className="submit"
          type="submit"
          value="Generate My Ticket"
        />
      </form>
  );
}

export default Form;
