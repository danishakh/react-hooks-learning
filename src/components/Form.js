import React, { useState, useContext } from "react";
import PeopleContext from "../context/peopleContext";

const Form = () => {
	const [person, setPerson] = useState({ firstName: "", lastName: "" });
	const context = useContext(PeopleContext);

	const changeHandler = (e) => {
		setPerson({ ...person, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();

		// basic validation...
		if (person.firstName.trim() === "" || person.lastName.trim() === "") return;

		const newPerson = {
			firstName: person.firstName.trim(),
			lastName: person.lastName.trim(),
		};

		// use the addPerson() function defined in App.js that does the call to setPerson()
		context.addPerson(newPerson);

		// reset the form
		setPerson({ firstName: "", lastName: "" });
	};

	return (
		<div className="col">
			<h2>Add a Person</h2>
			<hr />
			<form onSubmit={submitHandler}>
				<div className="form-group mt-2">
					<input
						type="text"
						className="form-control"
						name="firstName"
						placeholder="First Name"
						value={person.firstName}
						onChange={changeHandler}
					/>
				</div>
				<div className="form-group mt-2">
					<input
						type="text"
						className="form-control"
						name="lastName"
						placeholder="Last Name"
						value={person.lastName}
						onChange={changeHandler}
					/>
				</div>
				<button className="btn btn-success mt-2" type="submit">
					Add
				</button>
			</form>
		</div>
	);
};

export default Form;
