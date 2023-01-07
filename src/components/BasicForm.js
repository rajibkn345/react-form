import React, { useState, useEffect } from "react";
import "./BasicForm.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "./Modal";
import DropDownMenu from "./DropDownMenu";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";
import plusIcon from "../plus_icon.png";
const initialValues = {
  organization: "",
  program: "",
  pattern: "",
  epics: [],
  capability: [],
  platform: [],
  scontainer: [],
};

const BasicForm = () => {
  const [epics, setEpics] = useState([]);
  const [capability, setCapability] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [scontainer, setScontainer] = useState([]);
  const [disable, setDisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [modalHeading, setModalHeading] = useState("");

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
    let parentDiv = e.target.parentNode;
    setId(parentDiv.id);
    if (parentDiv.id === "epicsId") {
      setModalHeading("Epics ID(s)");
    } else if (parentDiv.id === "plafromId") {
      setModalHeading("Add Platform(s)");
    } else if (parentDiv.id === "capabilityId") {
      setModalHeading("Add Capabilites");
    } else if (parentDiv.id === "scontainerId") {
      setModalHeading("Add S-container(s)");
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      values.epics = epics;
      values.capability = capability;
      values.platform = platform;
      values.scontainer = scontainer;
      console.log(values);
    },
  });

  const disableHandler = (e) => {
    if (e.target.value === "Scontainers") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const saveHandler = (id, value) => {
    if (id === "epicsId") {
      setEpics((prev) => [...prev, value]);
    } else if (id === "capabilityId") {
      setCapability((prev) => [...prev, value]);
    } else if (id === "platformId") {
      setPlatform((prev) => [...prev, value]);
    } else if (id === "scontainerId") {
      setScontainer((prev) => [...prev, value]);
    }
  };

  return (
    <div className="formContainer">
      <form className="flexColumn" onSubmit={handleSubmit}>
        {isOpen ? (
          <Modal
            id={id}
            heading={modalHeading}
            onSave={saveHandler}
            setIsOpen={setIsOpen}
          />
        ) : (
          ""
        )}
        <div className="form">
          <div className="formGroup">
            <label htmlFor="organization" className="formLabel">
              Organization name
            </label>
            <span className="formHelperText">Add your organization name</span>
            <span className="errors">{errors.organization}</span>
            <input
              name="organization"
              id="organization"
              onChange={handleChange}
              value={values.organization}
              className="formControl"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="program" className="formLabel">
              Program name
            </label>
            <span className="formHelperText">Add your program name</span>
            <span className="errors">{errors.program}</span>
            <input
              name="program"
              id="program"
              onChange={handleChange}
              value={values.program}
              placeholder="Program name"
              className="formControl"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="pattern" className="formLabel">
              Application pattern
            </label>
            <span className="formHelperText">
              App pattern to determine the right metrics
            </span>
            <select
              name="pattern"
              onChange={handleChange}
              value={values.pattern}
              onClick={disableHandler}
              className="formSelect"
            >
              {["", "Epics", "Scontainers"].map((item, index) => (
                <option className="formOption" value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div id="epicsId" className="formGroup">
            <DropDownMenu
              disable={disable}
              label="Epics ID(s)"
              value={values.epics}
              name="epics"
              items={epics}
              onChange={handleChange}
              optionItem="please add the Epics ID(s)"
            />
            {!disable ? (
              <img
                src={plusIcon}
                onClick={openModal}
                alt="plus"
                className="plusCircle"
              />
            ) : (
              ""
            )}
          </div>
          <div id="capabilityId" className="formGroup">
            <DropDownMenu
              disable={disable}
              onChange={(e) => {
                handleChange();
              }}
              items={capability}
              value={values.capability}
              name="capability"
              label="Add Capabilites"
              optionItem="please add the Capabilities"
            />
            {!disable ? (
              <img
                src={plusIcon}
                onClick={openModal}
                alt="plus"
                className="plusCircle"
              />
            ) : (
              ""
            )}
          </div>
          <div id="platformId" className="formGroup">
            <DropDownMenu
              disable={disable}
              onChange={(e) => {
                handleChange();
              }}
              value={values.platform}
              name="platform"
              items={platform}
              label="Add Platform(s)"
              optionItem="please add the Platform(s)"
            />
            {!disable ? (
              <img
                src={plusIcon}
                onClick={openModal}
                alt="plus"
                className="plusCircle"
              />
            ) : (
              ""
            )}
          </div>
          <div id={"scontainerId"} className="formGroup">
            <DropDownMenu
              name="scontainer"
              onChange={(e) => {
                handleChange();
              }}
              items={scontainer}
              value={values.scontainer}
              label="Add S-container(s)"
              optionItem="please add the S-container(s)"
            />

            <img
              src={plusIcon}
              onClick={openModal}
              alt="plus"
              className="plusCircle"
            />
          </div>
        </div>
        <button type="submit" className="submitBtn">
          Onboarding Form
        </button>
      </form>
    </div>
  );
};

export default BasicForm;
