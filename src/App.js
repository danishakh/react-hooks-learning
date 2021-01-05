import React, { useReducer } from "react";
import Form from "./components/Form";
import PeopleList from "./components/PeopleList";
import NewestPerson from "./components/NewestPerson";

import PeopleContext from "./context/peopleContext";
import peopleReducer from "./context/peopleReducer";
import { ADD_PERSON } from "./context/types";

const App = () => {
	// ====================================
	// Lets create a form that lets you add people to a list, and display the list of people !
	// ====================================

	// usState() will return us an array of 2 things - 1st: the current state of 'people' and 2nd: function to update the state
	const initialState = {
		people: [
			{
				firstName: "Harry",
				lastName: "Potter",
			},
			{
				firstName: "Morgan",
				lastName: "Pierce",
			},
		],
	};

	const [state, dispatch] = useReducer(peopleReducer, initialState);

	// we will call this when we want to add a new person to the list, and this will be passed down using the context. The peopleReducer will catch this action and call the appropriate action and update our state
	const addPerson = (newPerson) => {
		dispatch({
			type: ADD_PERSON,
			payload: newPerson,
		});
	};

	return (
		<PeopleContext.Provider
			value={{
				people: state.people,
				addPerson: addPerson,
			}}
		>
			<div className="container mt-4">
				<div className="row">
					<Form />
					<PeopleList />
					<NewestPerson />
				</div>
			</div>
		</PeopleContext.Provider>
	);
};

export default App;
