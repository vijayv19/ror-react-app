import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup,FormLabel,FormText, FormControl, Button } from "react-bootstrap";
  
const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Rquired"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Rquired"),
    rollno: Yup.number()
      .positive("Invalid roll number")
      .integer("Invalid roll number")
      .required("Rquired"),
    address: Yup.string().required("Rquired")
  });
  console.log(props);

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <Field name="name" type="text" placeholder="Enter name"
                className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>

          <FormGroup>
           <br></br> 
          <FormLabel>Email</FormLabel>  
            <Field name="email" type="email" placeholder="Enter email"
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>

          <FormGroup>
          <br></br> 
          <FormLabel>Roll No</FormLabel>
            <Field name="rollno" type="number" placeholder="Enter roll no"
                className="form-control" />
            <ErrorMessage
              name="rollno"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>

          <FormGroup>
          <br></br> 
            <FormLabel>Address</FormLabel>
            <Field name="address" type="text" placeholder="Enter adress"
                className="form-control" />
            <ErrorMessage
              name="address"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>

          <br></br> 
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default StudentForm;