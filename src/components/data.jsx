import React, { Component } from "react";

import "./data.css";
import { useEffect, useState } from "react";

// function DataFunction() {
// 	const userObj = {
// 		0: {
// 			id: 1,
// 			name: "Leanne Graham",
// 			username: "Bret",
// 			email: "Sincere@april.biz",
// 		},
// 		1: {
// 			id: 2,
// 			name: "Ervin Howell",
// 			username: "Antonette",
// 			email: "Shanna@melissa.tv",
// 		},
// 		2: {
// 			id: 3,
// 			name: "Clementine Bauch",
// 			username: "Samantha",
// 			email: "Nathan@yesenia.net",
// 		},
// 		3: {
// 			id: 4,
// 			name: "Patricia Lebsack",
// 			username: "Karianne",
// 			email: "Julianne.OConner@kory.org",
// 		},
// 		4: {
// 			id: 5,
// 			name: "Chelsey Dietrich",
// 			username: "Kamren",
// 			email: "Lucio_Hettinger@annie.ca",
// 		},
// 		5: {
// 			id: 6,
// 			name: "Mrs. Dennis Schulist",
// 			username: "Leopoldo_Corkery",
// 			email: "Karley_Dach@jasper.info",
// 		},
// 		6: {
// 			id: 7,
// 			name: "Kurtis Weissnat",
// 			username: "Elwyn.Skiles",
// 			email: "Telly.Hoeger@billy.biz",
// 		},
// 		7: {
// 			id: 8,
// 			name: "Nicholas Runolfsdottir V",
// 			username: "Maxime_Nienow",
// 			email: "Sherwood@rosamond.me",
// 		},
// 		8: {
// 			id: 9,
// 			name: "Glenna Reichert",
// 			username: "Delphine",
// 			email: "Chaim_McDermott@dana.io",
// 		},
// 		9: {
// 			id: 10,
// 			name: "Clementina DuBuque",
// 			username: "Moriah.Stanton",
// 			email: "Rey.Padberg@karina.biz",
// 		},
// 	};

// 	// let dataArray = { name: "Lassz" };
// 	// let [data, setData] = useState(dataArray);

// 	// useEffect(() => {
// 	// 	// const url = "https://github.com/usersss";
// 	// 	const url = "https://jsonplaceholder.typicode.com/userss";
// 	// 	let fetchData = async () => {
// 	// 		let response = await fetch(url);
// 	// 		try {
// 	// 			if (!response.ok) {
// 	// 				console.log(`error encountered`);
// 	// 			}
// 	// 			setData(response.json());
// 	// 			console.log(data);
// 	// 		} catch (error) {
// 	// 			console.log(`Error: ${error}`);
// 	// 			// throw new Error(error);
// 	// 		}
// 	// 	};

// 	// 	fetchData();
// 	// }, []);

// 	return (
// 		<div className="data-container">
// 			<input type="text" placeholder="Username" />
// 			Username: {userObj[0].name}
// 			{/* {userObj.map((user) => {
// 				const { name, email } = user;
// 				return (
// 					<div className="person" key={name}>
// 						<h1>Name: {name}</h1>
// 						<p>Email address: {email}</p>
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, neque?
// 					</div>
// 				);
// 			})} */}
// 			{userObj.map((user) => user[9].name)}
// 		</div>
// 	);
// }

// export default DataFunction;

class DataFunction extends Component {
	state = {
		userObj: [
			{
				id: 1,
				name: "Leanne Graham",
				username: "Bret",
				email: "Sincere@april.biz",
			},
			{
				id: 2,
				name: "Ervin Howell",
				username: "Antonette",
				email: "Shanna@melissa.tv",
			},
			{
				id: 3,
				name: "Clementine Bauch",
				username: "Samantha",
				email: "Nathan@yesenia.net",
			},
			{
				id: 4,
				name: "Patricia Lebsack",
				username: "Karianne",
				email: "Julianne.OConner@kory.org",
			},
			{
				id: 5,
				name: "Chelsey Dietrich",
				username: "Kamren",
				email: "Lucio_Hettinger@annie.ca",
			},
			{
				id: 6,
				name: "Mrs. Dennis Schulist",
				username: "Leopoldo_Corkery",
				email: "Karley_Dach@jasper.info",
			},
			{
				id: 7,
				name: "Kurtis Weissnat",
				username: "Elwyn.Skiles",
				email: "Telly.Hoeger@billy.biz",
			},
			{
				id: 8,
				name: "Nicholas Runolfsdottir V",
				username: "Maxime_Nienow",
				email: "Sherwood@rosamond.me",
			},
			{
				id: 9,
				name: "Glenna Reichert",
				username: "Delphine",
				email: "Chaim_McDermott@dana.io",
			},
			{
				id: 10,
				name: "Clementina DuBuque",
				username: "Moriah.Stanton",
				email: "Rey.Padberg@karina.biz",
			},
		],
	};
	render() {
		return (
			<div className="data-container">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias sit,
				eligendi error quaerat enim nihil dolor quidem voluptatem fugit!
				{this.state.userObj.map((user, index) => {
					console.log(user.name);

					return <div key={index}>{user.name}</div>;
				})}
			</div>
		);
	}
}

export default DataFunction;
