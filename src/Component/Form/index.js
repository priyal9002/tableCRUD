import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function Form({ submit, singleValue }) {
  const FormValidator = useFormik({
    initialValues: {
      name: singleValue?.name ? singleValue?.name : "",
      email: singleValue?.email ? singleValue?.email : "",
      phone: singleValue?.phone ? singleValue?.phone : "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "too Short")
        .max(50, "Too max")
        .required("Name field is required"),
      email: yup
        .string()
        .email("Enter valid email")
        .required("Email field is required"),
      phone: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone field is required"),
    }),
    onSubmit: (values) => {
        submit({...singleValue,...values});
        FormValidator.resetForm()
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          FormValidator.submitForm();
        }}
      >
        <div>
          <input
            name="name"
            placeholder="Enter your Name"
            value={FormValidator.values.name}
            onChange={FormValidator.handleChange}
            onBlur={FormValidator.handleBlur}
          />
          {FormValidator.touched.name && FormValidator.errors.name ? (
            <p className="error-mes">{FormValidator.errors.name}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={FormValidator.values.email}
            placeholder="Enter your Email"
            onChange={FormValidator.handleChange}
            onBlur={FormValidator.handleBlur}
          />
          {FormValidator.touched.email && FormValidator.errors.email ? (
            <p className="error-mes">{FormValidator.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <input
            name="phone"
            placeholder="Enter your phone"
            value={FormValidator.values.phone}
            onChange={FormValidator.handleChange}
            onBlur={FormValidator.handleBlur}
          />
          {FormValidator.touched.phone && FormValidator.errors.phone ? (
            <p className="error-mes">{FormValidator.errors.phone}</p>
          ) : (
            ""
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
