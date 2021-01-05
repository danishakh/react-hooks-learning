import { useState } from "react";

export const useForm = (callback, initialState = {}, validate) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	const changeHandler = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();

		// run the validator function...
		// check if the errors object that it returns is empty
		if (Object.keys(validate(values)).length === 0) {
			callback();
			// reset the form
			setValues(initialState);
			// reset the errors
			setErrors({});
		} else {
			setErrors(validate(values));
		}
	};

	return {
		changeHandler,
		submitHandler,
		errors,
		values,
	};
};
