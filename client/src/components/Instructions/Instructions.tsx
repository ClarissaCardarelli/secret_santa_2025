import "./Instructions.css";

type InstructionsProps = {
  gameLaunched: boolean;
  setGameLaunched: (value: boolean) => void;
};

function Instructions({ gameLaunched, setGameLaunched }: InstructionsProps) {
  return (
    <div className="instructions">
      <p className="general-text">
        Découvre le mot mystère lettre par lettre… il parle d'Emeric !
      </p>
      <button
        type="button"
        className="button"
        onClick={() => setGameLaunched(!gameLaunched)}
      >
        C'est parti
      </button>
    </div>
  );
}

export default Instructions;
