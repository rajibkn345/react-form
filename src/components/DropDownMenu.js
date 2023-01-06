import React, { useState } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "./Modal";

const DropDownMenu = (props) => {
  const [allItems, setAllItems] = useState(props.items);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
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
        onChange={props.onChange}
        value={props.value}
      >
        {allItems.map((item, index) => (
          <option className="formOption" key={index}>
            {item}
          </option>
        ))}
      </select>
      {!props.disable ? (
        <button onClick={openModal} className="plusCircle">
          <AiOutlinePlusCircle fontSize={"24px"} />
        </button>
      ) : (
        ""
      )}
      {isOpen ? (
        <Modal
          heading={props.label}
          setAllItems={setAllItems}
          setIsOpen={setIsOpen}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default DropDownMenu;
