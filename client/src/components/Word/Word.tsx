import "./Word.css";

type WordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

function Word({ wordToGuess, guessedLetters, reveal = false }: WordProps) {
  return (
    <>
      <div className="word-container">
        {[...wordToGuess].map((letter, index) => {
          const isGuessed = guessedLetters.includes(letter);
          const showLetter = isGuessed || reveal;
          const letterColor = !isGuessed && reveal ? "var(--red)" : "black";

          return (
            <span className="underline" key={index}>
              <span
                style={{ color: letterColor }}
                className={showLetter ? "visible" : "hidden"}
              >
                {letter}
              </span>
            </span>
          );
        })}
      </div>
    </>
  );
}

export default Word;
