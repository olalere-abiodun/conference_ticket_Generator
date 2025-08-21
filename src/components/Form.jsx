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
        <div className="avatar-error">
            <img src="/assets/images/icon-info.svg" alt="User Avatar" />
            <span>Upload your photo (JPEG or PNG, Max size: 500KB)</span>
        </div>
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
