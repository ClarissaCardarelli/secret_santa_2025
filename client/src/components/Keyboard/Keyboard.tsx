import "./Keyboard.css";

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  activeLetters: string[];
  inactiveLetters: string[];
  disabled: boolean;
};

function Keyboard({
  addGuessedLetter,
  activeLetters,
  inactiveLetters,
  disabled,
}: KeyboardProps) {
  let alphabet = [];
  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  return (
    <div className="keyboard">
      {alphabet.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);

        return (
          <button
            disabled={isActive || isInactive || disabled}
            className={`letter-key ${
              isActive ? "correct" : isInactive ? "incorrect" : ""
            }`}
            key={letter}
            onClick={() => {
              addGuessedLetter(letter);
            }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
