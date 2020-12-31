import React, { useState } from "react";
import Form from "./components/Form";
import PeopleList from "./components/PeopleList";
import NewestPerson from "./components/NewestPerson";

const App = () => {
	// ====================================
	// Lets create a form that lets you add people to a list, and display the list of people !
	// ====================================

	// usState() will return us an array of 2 things - 1st: the current state of 'people' and 2nd: function to update the state
	const [people, setPeople] = useState([
		{
			firstName: "Harry",
			lastName: "Potter",
		},
		{
			firstName: "Morgan",
			lastName: "Pierce",
		},
	]);

	// we have to spread the people that were in state from before bec useState does not merge, it just overwrites
	const addPerson = (newPerson) => {
		setPeople([...people, newPerson]);
	};

	return (
		<div className="container mt-4">
			<div className="row">
				<Form addPerson={addPerson} />
				<PeopleList people={people} />
				<NewestPerson
					newestPerson={people[people.length - 1]}
					peopleCount={people.length}
				/>
			</div>
		</div>
	);
};

export default App;
