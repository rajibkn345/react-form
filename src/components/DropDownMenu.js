import React, { useState } from "react";

const DropDownMenu = (props) => {
  // const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor="formSelect" className="formLabel">
        {props.label}
      </label>
      <select
        id="formSelect"
        disabled={props.disable}
        name={props.name}
        className="formSelect"
      >
        <option>{props.optionItem}</option>
        {props.items?.map((item, index) => (
          <option className="formOption" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDownMenu;
