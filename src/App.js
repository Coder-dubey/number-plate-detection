import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import Navbar from './Navbar';  // Import the Navbar component
import Home from './Home';      // Import the Home component
import Dropzone from "react-dropzone"; // For file upload functionality
import axios from "axios"; // For making HTTP requests
import './App.css'; // Main CSS file for styling

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleFileUpload = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("YOUR_API_URL", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResult(response.data.results[0].plate); // Assuming your API returns the detected plate in this structure
    } catch (error) {
      console.error("Error in detection:", error);
    }
  };

  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route
            path="/upload"
            element={
              <div className="container">
                <h1>Number Plate Detection</h1>
                <Dropzone onDrop={handleFileUpload}>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="dropzone"
                    >
                      <input {...getInputProps()} />
                      <p>Drag and drop an image here, or click to select one</p>
                    </div>
                  )}
                </Dropzone>

                {image && (
                  <div className="preview">
                    <h3>Preview:</h3>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                    />
                  </div>
                )}

                <button onClick={handleSubmit} disabled={!image}>
                  Detect Number Plate
                </button>

                {result && (
                  <div className="result">
                    <h3>Detected Number Plate: {result}</h3>
                  </div>
                )}
              </div>
            }
          /> {/* Upload Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
