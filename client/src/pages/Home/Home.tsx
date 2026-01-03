import { useState } from "react";
import "./Home.css";
import adjectives from "../../data/adjectives";
import Hangman from "../../components/Hangman/Hangman";
import Word from "../../components/Word/Word";
import Keyboard from "../../components/Keyboard/Keyboard";
import Instructions from "../../components/Instructions/Instructions";

function Home() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord(adjectives));
  const [round, setRound] = useState(1);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [totalWrongGuesses, setTotalWrongGuesses] = useState<string[]>([]);
  const [gameLaunched, setGameLaunched] = useState<boolean>(false);

  function getRandomWord(words: string[]) {
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
  }

  const addGuessedLetter = (letter: string) => {
    //do not do anything if I already guessed this letter
    if (guessedLetters.includes(letter)) return;
    //if incorrect,
    if (!wordToGuess.includes(letter)) {
      setTotalWrongGuesses((current) => [...current, letter]);
    }
    setGuessedLetters((current) => [...current, letter]);
  };

  console.log("home page" + wordToGuess);
  console.log(guessedLetters);

  const isLoser = totalWrongGuesses.length >= 7;

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const startNewRound = () => {
    setGuessedLetters([]);
    setWordToGuess(getRandomWord(adjectives));
    setRound((prev) => prev + 1);
  };

  return (
    <>
      <div className="game-area">
        <Hangman wrongGuessesArray={totalWrongGuesses} />
        <div className="game">
          {gameLaunched ? (
            <>
              <div className="general-text round-info">
                Round {round} / {adjectives.length}
              </div>
              <Word
                reveal={isLoser}
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
              />
              <Keyboard
                disabled={isLoser || isWinner}
                addGuessedLetter={addGuessedLetter}
                activeLetters={guessedLetters.filter((letter) =>
                  wordToGuess.includes(letter)
                )}
                inactiveLetters={guessedLetters.filter(
                  (letter) => !wordToGuess.includes(letter)
                )}
              />
              {isWinner && (
                <button className="button" onClick={startNewRound}>
                  Tour suivant
                </button>
              )}
              {isLoser && <button className="button">Mon score</button>}
            </>
          ) : (
            <Instructions
              gameLaunched={gameLaunched}
              setGameLaunched={setGameLaunched}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default Home;
