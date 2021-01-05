import React, { useContext, useRef } from "react";
import PeopleContext from "../context/peopleContext";
import { useForm } from "../hooks";

const Form = () => {
	const context = useContext(PeopleContext);

	const validateForm = (values) => {
		let errors = {};
		if (values.firstName.trim() === "") {
			errors.firstName = "First Name is required";
		}
		if (values.lastName.trim() === "") {
			errors.lastName = "Last Name is required";
		}

		return errors;
	};

	const addPersonFromForm = () => {
		// use the addPerson() function defined in App.js that does the call to setPerson()
		context.addPerson(values);
	};

	// lets use our custom form validation hook
	const { values, errors, changeHandler, submitHandler } = useForm(
		addPersonFromForm,
		{ firstName: "", lastName: "" },
		validateForm
	);

	return (
		<div className="col">
			<h2>Add a Person</h2>
			<hr />
			<form onSubmit={submitHandler}>
				<div className="form-group mt-2">
					<input
						type="text"
						className={`form-control ${errors.firstName && "is-invalid"}`}
						name="firstName"
						placeholder="First Name"
						value={values.firstName}
						onChange={changeHandler}
					/>
					{errors.firstName && (
						<div className="invalid-feedback">{errors.firstName}</div>
					)}
				</div>
				<div className="form-group mt-2">
					<input
						type="text"
						className={`form-control ${errors.lastName && "is-invalid"}`}
						name="lastName"
						placeholder="Last Name"
						value={values.lastName}
						onChange={changeHandler}
					/>
					{errors.lastName && (
						<div className="invalid-feedback">{errors.lastName}</div>
					)}
				</div>
				<button className="btn btn-success mt-2" type="submit">
					Add
				</button>
			</form>
		</div>
	);
};

export default Form;
