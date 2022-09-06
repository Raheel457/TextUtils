import React, { useState } from "react";
import Alert from "./Components/Alert";
import Nav from "./Components/Navbar";
import Area from "./Components/TextArea";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Sending Alerts
  const [alert, setAlert] = useState(null);
  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  }
  // Checking Mode of page
  const [darkMode, checkMode] = useState(false);
  function toggleMode() {
    checkMode((previous) => {
      return !previous;
    });
    if (darkMode) {
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
    } else {
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode activated", "success");
    }
  }
  return (
    <>
      <Router>
        <Nav mode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Area mode={darkMode} showAlert={showAlert} />}
          />
          <Route exact path="about" element={<About mode={darkMode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
