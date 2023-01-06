import React, { useState } from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, setAllItems, heading }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(value);
    setAllItems((prev) => [...prev, value]);
    setIsOpen(false);
  };

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="formModal">
            <label className="heading">{heading}</label>
            <input
              value={value}
              id="mInput"
              onChange={handleChange}
              className="modalInput"
              name="mInput"
            />
            <button type="submit" onClick={handleSave} className="saveBtn">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
