import React from "react";

const PeopleList = (props) => {
	return (
		<div className="col">
			<h2>People in UseState</h2>
			<hr />

			{props.people.map((p) => (
				<div key={Math.random() * 1000000}>
					<p>
						{p.firstName} {p.lastName}
					</p>
				</div>
			))}
		</div>
	);
};

export default PeopleList;
