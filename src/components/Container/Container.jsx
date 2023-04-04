import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import SelectPlayer from "../SelectPlayer/SelectPlayer";
import "./Container.css";
import Swal from 'sweetalert2'

const Container = () => {
	const [players, setPlayers] = useState([]);
	const [selectedPlayers, setSelectedPlayers] = useState([]);

	useEffect(() => {
		const loadPlayers = async () => {
			const res = await fetch("../../../players.json");
			const data = await res.json();
			setPlayers(data);
		};
		loadPlayers();
	}, []);

	const selectPlayerFunc = (selectPlayer) => {
		const matchSelectPlayer = selectedPlayers.find(
			(selectedPlayer) => selectedPlayer.id == selectPlayer.id
		);
		if (matchSelectPlayer) {
			Swal.fire("You have already selected this player");
		} else {
            setSelectedPlayers([...selectedPlayers, selectPlayer]);
        }
	};

    const removeSelectedPlayer = (id) => {
        const newSelectedPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.id != id);
        setSelectedPlayers(newSelectedPlayers);
    }

	return (
		<div className="container">
			<div className="players">
				{players &&
					players.map((player) => (
						<Player key={player.id} player={player} eventHandler={selectPlayerFunc}></Player>
					))}
			</div>
			<div className="selected-players">
				<SelectPlayer selectedPlayers={selectedPlayers} removeSelectedPlayer={removeSelectedPlayer}></SelectPlayer>
			</div>
		</div>
	);
};

export default Container;
