import React, { useState } from "react";

export default function App() {
  const [students, setStudents] = useState(null);
  const [filterData, setFilterData ] = useState(null);


  const getStudents=(i)=>{
    fetch('http://localhost:3000/api/students/' +i)
      .then(resp => 
        resp.json())
      .then(data => {
            if(data.data== null){
              alert('No Data Found');
            }else {
                setFilterData(data.data);
                setStudents(data.data);     
            }
      })
  }

  const searchById = (event) => {
    event.persist();
    // Get the search term
    const searchItem = event.target.value.trim();
    // If search term is empty fill with full students data
    if(!searchItem.trim()) {
      setFilterData(students);
    }
    getStudents(searchItem)
  }

   return (
    <div className="App">
      <h1>Find the Student</h1>
      <div className="search" id="search">
          <input type="number" placeholder="Enter Student Id" name="serachById" onChange={(e) => searchById(e)} ></input>
      </div>


      {filterData && [filterData].map((student, index) => {
          if(student.attributes){
            return(
                <div className="student" key={index}>        
                  <div className="text">
                    <br></br>
                   <h3 id="detail"> {student.id}</h3>
                    <h3 id="detail"> {student.attributes.name}</h3>
                    <p id="detail"><strong>Email:</strong> {student.attributes.email}</p>
                    <p id="detail"><strong>Roll No:</strong> {student.attributes.rollno}</p>
                    <p id="detail"><strong>Address:</strong> {student.attributes.address}</p>
                  </div>
                </div>
          
            )
          }          
      }
    )}  
    </div>
  );
}