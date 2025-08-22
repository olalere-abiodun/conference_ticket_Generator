import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";

function Form({ onSubmit }) {
  // State to manage form inputs
  const [avatarFile, setAvatarFile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function checkEmail(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const valid = /\S+@\S+\.\S+/.test(emailValue);
    setError(!valid);
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    if (!error) {
      // Only submit if there are no errors
      onSubmit({ avatarFile, fullName, email, github });
      navigate("/generate", { state: { formData: { avatarFile, fullName, email, github }} });
    } else {
      console.log("Fix the errors before submitting!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Avatar onFileChange={setAvatarFile} />
      
      <Label text="Full Name" />
      <Input
        className="input"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <Label text="Email Address" />
      <Input
        className={`input ${error ? "error" : ""}`}
        type="email"
        value={email}
        placeholder="example@email.com"
        onChange={checkEmail}
      />
      <div
        className="avatar-error"
        style={{ display: error ? "flex" : "none" }}
      >
        <img src="/assets/images/icon-info.svg" alt="User Avatar" />
        <span>Please enter a valid e-mail</span>
      </div>

      <Label text="GitHub Username" />
      <Input
        className="input"
        type="text"
        placeholder="@yourusername"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
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
