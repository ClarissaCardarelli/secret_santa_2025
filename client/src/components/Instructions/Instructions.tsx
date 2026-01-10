import "./Instructions.css";

type InstructionsProps = {
  startNewGame: () => void;
};

function Instructions({ startNewGame }: InstructionsProps) {
  return (
    <div className="instructions">
      <p className="general-text">
        Découvre le mot mystère lettre par lettre… il parle d'Emeric !
      </p>
      <p className="extra-info-light">
        Trouvez-le avant qu'il ne soit enterré sous les cadeaux de Noël.
      </p>
      <button type="button" className="button" onClick={startNewGame}>
        C'est parti
      </button>
    </div>
  );
}

export default Instructions;
