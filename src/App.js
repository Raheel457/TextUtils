import React,{useState} from "react";
import Alert from "./Components/Alert";
import Nav from "./Components/Navbar"
import Area from "./Components/TextArea";
function App() {
  // Sending Alerts
  const [alert, setAlert] = useState(null);
  function showAlert(message,type){
    setAlert({
      message:message,
      type:type
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
    if (darkMode){
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated","success");
    }
    else{
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode activated","success");
    }
  }
  return (
    <>
      <Nav mode={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Area mode={darkMode} showAlert={showAlert}/>
    </>
  );
}

export default App;
