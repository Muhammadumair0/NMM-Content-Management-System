import React, { useState } from "react";

const SelectInput = ({ placeholder = "", list = [], defaultValue = "" }) => {

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [inputValue, setInputValue] = useState(null);

    const handleToggleDropdown = (value, isChangeAllowed = false) => {
        setToggleDropdown(!toggleDropdown);
        if(isChangeAllowed) {  
          setInputValue(value);
        }
      };

  return (
    <div style={{ position: "relative" }}>
      <input
        onClick={handleToggleDropdown}
        className={"general-select-input"}
        readOnly={true}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={inputValue}
      />
      <div
        style={{ position: "absolute", bottom: "1.5vh", right: "2vw" }}
        className={"ploygon-div"}
      >
        <img src={require("../../assets/SVG/PolygonUp.svg")} alt={""} />
        <img src={require("../../assets/SVG/PolygonDown.svg")} alt={""} />
      </div>
      <div
        style={{ display: !toggleDropdown && "none" }}
        className={"dropdown-content"}
      >
        {list.map((value, index) => {
          return (
            <p
              key={index}
              onClick={() => handleToggleDropdown(value, true)}
            >
              {value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SelectInput;
