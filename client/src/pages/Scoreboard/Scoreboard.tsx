import { useEffect, useState } from "react";
import "./Scoreboard.css";

interface Player {
  id: number;
  username: string;
  time: string;
  round: number;
}

function Scoreboard() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/scores`)
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="scoreboard">
        <h1 className="general-text">Classement</h1>

        <ul>
          <li>
            <p>Place</p>
            <p>Nom</p>
            <p>Durée</p>
            <p>Tour</p>
          </li>
        </ul>

        <ul className="playersList">
          {players.length > 0 ? (
            players.map((player, index) => (
              <li key={player.id}>
                <p>{index + 1}</p>
                <p>{player.username}</p>
                <p>{player.time}</p>
                <p>{player.round}</p>
              </li>
            ))
          ) : (
            <p className="extra-info loading">Chargement...</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Scoreboard;
