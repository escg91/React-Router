import React,{useState, useEffect} from "react";

import { Card } from "../component/card.jsx";

export const Home = () => {

	const [personajes, setPersonajes]= useState([])
	const [planetas, setPlanetas]= useState([])

    function traerPersonajes () {
	fetch("https://www.swapi.tech/api/people/")
	.then((response) => response.json())
	//.then((data)=> console.log(data))
	.then((data) => setPersonajes(data.results));
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
			<div className= "container-fluid bg-dark p3">

         <h2 style={{ color: "yellow" }}>Personajes</h2>
		 <div className= "d-flex">

		 {personajes.map((item,index)=> {return <Card key={index} nombre={item.name} id={item.uid}/>})}
		 
		 <div className="d-flex">
      <h2 style={{ color: "yellow" }}>Planetas</h2>
   
        {planetas.map((item, index) => {
          return <planetas key={index} name={item.name} id={item.uid} />;
          
        })}
     </div>
		 </div>

				
			</div>
	    )
		};


		
	
	
