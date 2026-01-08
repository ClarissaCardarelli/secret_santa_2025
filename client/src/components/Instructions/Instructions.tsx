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
      <button type="button" className="button" onClick={startNewGame}>
        C'est parti
      </button>
    </div>
  );
}

export default Instructions;
