import React from "react";

function Alert(props) {
    function capitalize(type){
        return type[0].toUpperCase() + type.slice(1);
    }
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
      </div>
    )
  );
}

export default Alert;
