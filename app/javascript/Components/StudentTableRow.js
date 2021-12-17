import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
	
	const {id } = props.obj;
    const { name, email, rollno,address } = props.obj.attributes;

const deleteStudent = () => {
	axios
	.delete(
"http://localhost:3000/api/students/" + id)
	.then((res) => {
		if (res.status === 204) {
		alert("Student successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};


return (
	
	<tr>
	<td>{id}</td>
	<td>{name}</td>
	<td>{email}</td>
	<td>{rollno}</td>
	<td>{address}</td>

	<td>
		<Link className="edit-link"
		to={"/edit-student/" + id}>
		Edit
		</Link>
		<Button className="edit-link1" onClick={deleteStudent}>
		Delete
		</Button>
	</td>
	</tr>
);
};

export default StudentTableRow;
