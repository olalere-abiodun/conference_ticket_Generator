import React, {useState} from "react";
import Header from "../components/header";
import Heading from "../components/Heading";
import Form from "../components/Form";


function Home() {
   const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
    console.log("Form submitted:", data);
  };
  return (
    <div className="app">
      <Header />
      <Heading />
      <Form onSubmit={handleSubmit} />
     
    </div>
  );
}

export default Home;