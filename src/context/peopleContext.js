import { createContext } from "react";

const peopleContext = createContext({
	people: [],
	addPerson: (person) => {},
});

export default peopleContext;
// now we also need to create a reducer that catches incoming actions and updates state accordingly -> peopleReducer.js
