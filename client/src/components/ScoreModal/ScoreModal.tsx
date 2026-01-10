import "./ScoreModal.css";

function ScoreModal({ round, minutes, seconds, setModalOpen, startNewGame }) {
  const correctedRound = round === 21 ? round - 1 : round;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="scoreInfo">
          <input
            type="text"
            placeholder="Ton prénom"
            autoFocus
            maxLength={20}
            className="placeholder"
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
          <button className="button" onClick={() => {}}>
            Envoyer mon score
          </button>

          <button
            className="button modal-button-new-game"
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
