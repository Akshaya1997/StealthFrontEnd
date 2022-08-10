import React, { useState, useEffect } from "react";
import { Form, Button } from "bootstrap-4-react";

const initialState = {
  name: null,
  email: null,
  mobile: null,
  country: null,
  city: null,
  state: null,
  message: null,
};

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors && formValues.name != null && formValues.email != null) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [errors, formValues]);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value ? event.target.value : "",
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(formValues);
    setErrors(validationErrors);
  };

  function handleSubmit(event) {
    event.preventDefault();
    setFormValues(initialState);
  }

  const validate = (values) => {
    let errors = {};
    if (values.name === "") {
      errors.name = "Name is Required";
    }
    if (values.email === "") {
      errors.email = "Email is Required";
    }
    if (
      values.email &&
      values.email !== "" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  return (
    <div className="m-4">
      <div className="form-row justify-content-center">
        <div className="form-group col-md-3 mb-2">
          <h4>Registration Form</h4>
        </div>
      </div>

      <div className="form-row justify-content-center">
        <div className="form-group col-md-3 mb-2">
          <Form.Input
            id="name"
            name="name"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={formValues.name || ""}
            placeholder="Please Enter your Name"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="col-md-3">
          {errors?.name && <p className="text-danger">{errors.name}</p>}
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-3 mb-2">
          <Form.Input
            id="email"
            name="email"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={formValues.email || ""}
            placeholder="Please Enter your Email"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="col-md-3">
          {errors?.email && <p className="text-danger">{errors.email}</p>}
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-3 mb-2">
          <Form.Input
            id="mobile"
            name="mobile"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={formValues.mobile || ""}
            placeholder="Please Enter your Mobile Number"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-3 mb-2">
          <Form.Input
            id="country"
            name="country"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={formValues.country || ""}
            placeholder="Please Enter your Country"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-3 mb-2">
          <Form.Input
            id="city"
            name="city"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={formValues.city || ""}
            placeholder="Please Enter your City"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-3 mb-2">
          <Form.Input
            id="state"
            name="state"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={formValues.state || ""}
            placeholder="Please Enter your State"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-md-3 mb-2">
          <Form.Input
            id="message"
            name="message"
            onChange={handleInputChange}
            onBlur={handleBlur}
            value={formValues.message || ""}
            placeholder="Please Enter your Message"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="col-md-3">
          <Button primary onClick={handleSubmit} disabled={disableSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
