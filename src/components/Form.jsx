import React from "react";
import Input from "./Input";
import Label from "./Label";
import Avatar from "./Avatar";

function Form() {
  return (
   <form action="">
        <Avatar />
        <Label text="Full Name" />
        <Input
          className="input"
          type="input"
        />
        <Label text="Email Address" />
        <Input
          className="input"
          type="input"
          placeholder="example@email.com"
        />
        <Label text="GitHub Username" />
        <Input
          className="input"
          type="input"
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
