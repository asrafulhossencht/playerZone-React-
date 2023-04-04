import React from "react";
import "./Header.css"

const Header = () => {
	return (
		<nav className="header">
			<h1>Players Zone</h1>
			<div>
				<a href="#">Home</a>
				<a href="#">Players</a>
				<a href="#">About</a>
				<a href="#">Contact Us</a>
			</div>
		</nav>
	);
};

export default Header;
