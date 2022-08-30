import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={function () {
          props.Changed(event);
        }}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.Clicked}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
