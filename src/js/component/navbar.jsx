import React from "react";
import { Link } from "react-router-dom";
import starImage from "../../img/StarWars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-black p-2">
  <Link to="/">
  <span className="navbar-brand mb-0 h1">
    <img src={starImage}  width="80" height="50"/></span>
      </Link>
        
        
        <div className="ml-auto">
        <Link to="/demo">
					<button className="btn btn-outline-warning">Favorites</button>
				</Link>
        </div>
   
</nav>
	)
	}