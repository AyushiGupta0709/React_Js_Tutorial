import React from "react";
const ComC = (props) => {
    console.log(props.name);
  return (
    <>
      <h1> My name is {props.name} </h1>
    </>
  );
};

export default ComC;
