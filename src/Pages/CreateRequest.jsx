import { useState } from "react";
import axios from "axios";
import "../assets/CreateRequest.css";

function CreateRequest() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [message, setMessage] = useState("");

  const saveRequest = () => {

    axios.post("http://localhost:8080/requests", {
      title,
      description,
      category,
      priority
    })
    // .then(() => {
    //   alert("Request Created Successfully");

    //   setTitle("");
    //   setDescription("");
    //   setCategory("");
    //   setPriority("");
    // })
    // .catch(err => console.log(err));
    

    .then(() => {
  setMessage("Request Created Successfully");

  setTitle("");
  setDescription("");
  setCategory("");
  setPriority("");
  
})
  };

 return (
  <div className="create-container">

    <div className="create-card">

      <h1>Create Request</h1>

      <input
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="">Select Priority</option>
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      {message && (
  <p className="success-msg">
    {message}
  </p>
)}

      <button onClick={saveRequest}>
        Submit Request
      </button>

    </div>

  </div>
);
}
export default CreateRequest;