import { useEffect, useState } from "react";

function Scoreboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/scores`)
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section>
        <h1>Scoreboard</h1>

        <ul>
          {players ? (
            players.map((player) => (
              <li key={player.id}>
                <strong>{player.name}</strong> — {player.score}
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Scoreboard;
