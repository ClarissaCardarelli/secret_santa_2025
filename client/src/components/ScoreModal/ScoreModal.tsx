import { useState } from "react";
import "./ScoreModal.css";
import { useNavigate } from "react-router-dom";

interface ScoreModalProps {
  round: number;
  minutes: string;
  seconds: string;
  setModalOpen: (arg0: boolean) => void;
  startNewGame: () => void;
}

function ScoreModal({
  round,
  minutes,
  seconds,
  setModalOpen,
  startNewGame,
}: ScoreModalProps) {
  const navigate = useNavigate();
  const correctedRound = round === 21 ? round - 1 : round;
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="scoreInfo">
          <input
            type="text"
            name="username"
            placeholder="Santa Claus"
            autoFocus
            maxLength={15}
            className="placeholder"
            required
            value={username}
            onChange={handleUsernameChange}
          />

          <p className="extra-info">
            Durée:{" "}
            <span className="extra-info-light">{`${minutes}:${seconds}`}</span>
          </p>

          <p className="extra-info">
            Tour: <span className="extra-info-light">{correctedRound}</span>
          </p>
        </div>

        <div className="modal-button-container">
          <button
            className="button modal-button"
            onClick={(event) => {
              event.preventDefault();

              const newScore = {
                username: username,
                time: `${minutes}:${seconds}`,
                round: correctedRound,
              };

              fetch(`${import.meta.env.VITE_API_URL}/scores`, {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newScore),
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Failed to save score");
                  }
                  navigate("/scores");
                })
                .catch((err) => {
                  console.error(err);
                });
            }}
          >
            Envoyer score
          </button>

          <button
            className="button modal-button modal-button-new-game"
            onClick={() => {
              setModalOpen(false);
              startNewGame();
            }}
          >
            Nouvelle partie
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScoreModal;
