import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [count, setCount] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleAdd = () => {
    axios.post("https://dataneuron-tnn1.onrender.com/add", { name, age })
      .then(response => {
        setSuccessMessage("Data added successfully.");
        setName("");
        setAge("");
      })
      .catch(error => {
        console.error("Error adding data:", error);
      });
  };

  const handleUpdate = () => {
    axios.put("https://dataneuron-tnn1.onrender.com/update", { name, age })
      .then(response => {
        setSuccessMessage("Data updated successfully.");
        setAge("");
      })
      .catch(error => {
        console.error("Error updating data:", error);
      });
  };

  const handleCount = () => {
    axios.get("https://dataneuron-tnn1.onrender.com/count")
      .then(response => {
        setCount(response.data);
      })
      .catch(error => {
        console.error("Error getting count:", error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
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
      <h1>Count</h1>
      <button onClick={handleCount}>Get Count</button>
      <div>
        <p>Add Count: {count.add}</p>
        <p>Update Count: {count.update}</p>
      </div>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default App;
