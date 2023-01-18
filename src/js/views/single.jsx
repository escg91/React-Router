import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [personajes, setPersonajes]= useState([]);
	const [planetas, setPlanetas]= useState([]);

	function traerPersonajes () {
		fetch("https://www.swapi.tech/api/people/" + params.theid)
		.then((response) => response.json())
		.then((data) => setPersonajes(data.results.properties));
	
	}

	function traerPlanetas () {
		fetch("https://www.swapi.tech/api/planets/")
		.then((response) => response.json())
		//.then((data)=> console.log(data))
		.then((data) => setPlanetas(data.results));
	}
	
	useEffect(() => {
		traerPersonajes()
		traerPlanetas()
		}, [])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>
			<div>
        <h3>{card.name}</h3>
      </div>
	  <div>
        <h3>{planetas.name}</h3>
      </div>
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
