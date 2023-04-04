import React from "react";
import "./SelectPlayer.css";

const SelectPlayer = ({ selectedPlayers , removeSelectedPlayer}) => {
	return (
		<div className="all-selected-players-container">
			<div className="total-salary">
				<h4>
					Total Salary: $
					{selectedPlayers.reduce(
						(previousTotalSalary, selectedPlayer) =>
							previousTotalSalary + selectedPlayer.salary,
						0
					)}
				</h4>
			</div>
			<div className="all-selected-players">
				<h3>Selected Players: {selectedPlayers.length}</h3>
				<ul>
					{selectedPlayers.map((selectedPlayer) => (
						<li className="selected-player" key={selectedPlayer.id}>
							<img src={selectedPlayer.image} alt="" />
							<h4>{selectedPlayer.name}</h4>
							<button onClick={() => removeSelectedPlayer(selectedPlayer.id)}>x</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SelectPlayer;
