import React from "react";

const Button1 = (props) => {
  const handleOnClick = () => {
    props.handleOnClick();
  };
  return (
    <div className={"custom-button-1"} onClick={handleOnClick}>
      <p>{props.title}</p>
    </div>
  );
};

export default Button1;
