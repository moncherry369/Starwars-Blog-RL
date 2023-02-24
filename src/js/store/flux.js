const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
		},


		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
					fetch("https://swapi.dev/api/people")
					.then((res) => res.json())
					.then((data) => {
						setStore({characters:data.results})
						console.log("yo mama")
					})
					// use catch always to catch errors!!//
					.catch((error) =>{console.log(error)})

					fetch("https://swapi.dev/api/planets")
					.then((res) => res.json())
					.then((data) => {
						setStore({planets:data.results})
						console.log("yo mama")
					})
					// use catch always to catch errors!!//
					.catch((error) =>{console.log(error)})
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
