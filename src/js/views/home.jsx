import React,{useState, useEffect} from "react";

import { Card } from "../component/card.jsx";

export const Home = () => {

	const [personajes, setPersonajes]= useState([])

    function traerPersonajes () {
	fetch("https://www.swapi.tech/api/people/")
	.then((response) => response.json())
	.then((data) => setPersonajes(data.results));
}

        useEffect(() => {
		traerPersonajes()
		
		}, [])

		return (
			<div className= "container-fluid bg-dark p3">

         <h2 style={{ color: "yellow" }}>Personajes</h2>

				{personajes.map((cadaPersonaje, index) => {
          return <Card key={index} name={cadaPersonaje.name} id={cadaPersonaje.uid} />;
        })}
				{personajes.map((cadaPersonaje,index)=> {return <Card nombre={cadaPersonaje.name}/>})}
			</div>
	    )
		};


		
	
	
