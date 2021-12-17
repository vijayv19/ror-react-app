// CreateStudent Component for add new student
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
  const [formValues] = 
    useState({ name: '', email: '', rollno: '' })
  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post(
'http://localhost:3000/api/students', 
    studentObject)
      .then(res => {
        if (res.status === 200){
          window.location.reload(false);
          alert('Student successfully created');
        }
          
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <StudentForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Student
    </StudentForm>
  )
}
  
export default CreateStudent
