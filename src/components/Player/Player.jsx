import React from "react";
import "./Player.css"
    
const Player = (props) => {
	const { name, description, image, salary } = props.player;
	return (
		<div className="player">
			<img src={image} alt={name + " image"} />
			<div className="player-details">
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
            <button className="select-btn" onClick={() => props.eventHandler(props.player)}>Selected</button>
		</div>
	);
};

export default Player;
