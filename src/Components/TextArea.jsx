import React, { useState } from "react";

function TextArea(props) {
  // Text area checking
  const [writing, checkWriting] = useState(false);
  function whileWriting() {
    checkWriting(true);
  }
  // Text to change on onChange event
  const [text, setText] = useState("");
  function changeHandle(event) {
    setText(event.target.value);
  }
  // Text to change into Uppercase
  function toUpHandle() {
    const newText = text.toUpperCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Text area is Empty!", "warning");
    } else {
      props.showAlert("Change to uppercase", "success");
    }
  }
  // Text to change into Lowercase
  function toLowHandle() {
    const newText = text.toLowerCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Text area is Empty!", "warning");
    } else {
      props.showAlert("Change to lowercase", "success");
    }
  }
  // Capitalize Text
  function capitalize(user) {
    const newArr = user.split(".");
    let finalText = "";
    for (let i = 0; i < newArr.length - 1; i++) {
      if (newArr[i][0] === " ") {
        newArr[i] =
          newArr[i][1].toUpperCase() + newArr[i].slice(2).toLowerCase();
      } else {
        newArr[i] =
          newArr[i][0].toUpperCase() + newArr[i].slice(1).toLowerCase();
      }
      finalText += newArr[i] + ". ";
    }
    if (finalText === "") {
      return user;
    }
    return finalText;
  }
  function toCapitalizeHandle() {
    const newText = capitalize(text);
    setText(newText);
    if (text === "") {
      props.showAlert("Text area is Empty!", "warning");
    } else {
      props.showAlert("Text capitalized", "success");
    }
  }
  // Clearing Text
  function toClearHandle() {
    setText("");
    if (text === "") {
      props.showAlert("Text area is Already Empty!", "warning");
    } else {
      props.showAlert("Text Cleared", "success");
    }
  }

  return (
    <>
      <div
        className="form-group container my-3"
        style={{ color: props.mode && "white" }}
        onClick={whileWriting}
      >
        <h2>Let's Analyze Your Text</h2>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode && "grey",
            color: props.mode && "white",
          }}
          id="exampleFormControlTextarea1"
          rows={writing ? "8" : "1"}
          placeholder="Start writing here"
          value={text}
          onChange={changeHandle}
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={toUpHandle}>
          ALL UPPERCLASS
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={toLowHandle}>
          all lowerclass
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={toCapitalizeHandle}
        >
          All Capitalize
        </button>
        <button
          className="btn btn-outline-warning my-3 mx-2"
          onClick={toClearHandle}
        >
          Clear All
        </button>
      </div>
      {writing && (
        <div
          className="container my-4"
          style={{ color: props.mode && "white" }}
        >
          <h2>Preview:</h2>
          <h6>{text}</h6>
          <h2>Text Summary:</h2>
          <p>Words: {text === "" ? 0 : text.split(" ").length}</p>
          <p>Characters: {text.length}</p>
          <p>
            {text === "" ? 0 : 0.008 * text.split(" ").length} Minutes required
            to read
          </p>
        </div>
      )}
    </>
  );
}

export default TextArea;
