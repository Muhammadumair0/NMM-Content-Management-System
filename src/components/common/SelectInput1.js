import React, { useState } from "react";

const SelectInput1 = ({ placeholder = "", list = [], defaultValue = "" }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [inputValue, setInputValue] = useState(null);

  const handleToggleDropdown = (value, isChangeAllowed = false) => {
    setToggleDropdown(!toggleDropdown);
    if(isChangeAllowed) {  
      setInputValue(value);
    }
  };

  return (
    <div className={"select-input-1"} style={{ position: "relative" }}>
      <input
        onClick={handleToggleDropdown}
        className={"general-select-input"}
        readOnly={true}
        placeholder={placeholder}
      />
      <div
        style={{ position: "absolute", bottom: "1.5vh", right: "1vw" }}
        className={"ploygon-div"}
      >
        <img src={require("../../assets/SVG/PolygonUp.svg")} alt={""} />
        <img src={require("../../assets/SVG/PolygonDown.svg")} alt={""} />
      </div>
      <p
        style={{
          position: "absolute",
          top: "1.6vh",
          left: "6vw",
          fontSize: "0.8vw",
          fontWeight: "bold",
          letterSpacing: "0.1vw",
        }}
      >
        {inputValue ? inputValue :list[0]}
      </p>
      <div
        style={{ display: !toggleDropdown && "none" }}
        className={"dropdown-content"}
      >
        {list.map((value, index) => {
          return (
            <p key={index} onClick={() => handleToggleDropdown(value, true)}>
              {value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SelectInput1;
