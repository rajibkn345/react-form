import React, { useState } from "react";
import "./BasicForm.css";
import DropDownMenu from "./DropDownMenu";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";

const initialValues = {
  organization: "",
  program: "",
  pattern: "",
  epics: "",
  capability: "",
  platform: "",
  scontainer: "",
};

const BasicForm = () => {
  const [disable, setDisable] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log("values===", values);
    },
  });

  return (
    <div className="formContainer">
      <form className="flexColumn" onSubmit={handleSubmit}>
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
              onClick={(e) => {
                if (e.target.value === "Scontainers") {
                  setDisable(true);
                } else {
                  setDisable(false);
                }
              }}
              className="formSelect"
            >
              {["", "Epics", "Scontainers"].map((item, index) => (
                <option className="formOption" value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="formGroup">
            <DropDownMenu
              disable={disable}
              label="Epics ID(s)"
              onChange={handleChange}
              value={values.epics}
              name="epics"
              items={["please add the Epics ID(s)"]}
            />
          </div>
          <div className="formGroup">
            <DropDownMenu
              disable={disable}
              onChange={handleChange}
              value={values.capability}
              name="capability"
              label="Add Capabilites"
              items={["please add the Capabilities"]}
            />
          </div>
          <div className="formGroup">
            <DropDownMenu
              disable={disable}
              onChange={handleChange}
              value={values.platform}
              name="platform"
              label="Add Platform(s)"
              items={["please add the Platform(s)"]}
            />
          </div>
          <div className="formGroup">
            <DropDownMenu
              disable={disable}
              name="scontainer"
              onChange={handleChange}
              value={values.scontainer}
              label="Add S-container(s)"
              items={["please add the S-container(s)"]}
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
