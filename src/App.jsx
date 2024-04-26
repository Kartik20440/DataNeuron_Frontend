import React, { useState } from "react";
import axios from "axios";

function App() {
  // State variables to manage form input fields, count, and success message
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [count, setCount] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle adding data
  const handleAdd = () => {
    // Send POST request to add data
    axios.post("https://dataneuron-tnn1.onrender.com/add", { name, age })
      .then(response => {
        // Set success message and clear input fields
        setSuccessMessage("Data added successfully.");
        setName("");
        setAge("");
      })
      .catch(error => {
        // Log error if request fails
        console.error("Error adding data:", error);
      });
  };

  // Function to handle updating data
  const handleUpdate = () => {
    // Send PUT request to update data
    axios.put("https://dataneuron-tnn1.onrender.com/update", { name, age })
      .then(response => {
        // Set success message and clear age input field
        setSuccessMessage("Data updated successfully.");
        setAge("");
      })
      .catch(error => {
        // Log error if request fails
        console.error("Error updating data:", error);
      });
  };

  // Function to handle getting count data
  const handleCount = () => {
    // Send GET request to get count data
    axios.get("https://dataneuron-tnn1.onrender.com/count")
      .then(response => {
        // Update count state with response data
        setCount(response.data);
      })
      .catch(error => {
        // Log error if request fails
        console.error("Error getting count:", error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Form to add/update data */}
      <h1>Add / Update Data</h1>
      <label style={{ display: "block", marginBottom: "10px" }}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label style={{ display: "block", marginBottom: "10px" }}>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <button style={{ marginRight: "5px" }} onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <br />

      {/* Display count data */}
      <h1>Count</h1>
      <button onClick={handleCount}>Get Count</button>
      <div>
        <p>Add Count: {count.add}</p>
        <p>Update Count: {count.update}</p>
      </div>

      {/* Display success message if exists */}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default App;
