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
            players.map((player, index) => (
              <li key={player.id}>
                <p>{index + 1}</p>
                <strong>{player.username}</strong> — {player.time} —{" "}
                {player.round}
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
