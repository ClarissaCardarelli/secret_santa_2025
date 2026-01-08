import { useEffect, useRef, useState } from "react";
import "./Home.css";
import adjectives from "../../data/adjectives";
import Hangman from "../../components/Hangman/Hangman";
import Word from "../../components/Word/Word";
import Keyboard from "../../components/Keyboard/Keyboard";
import Instructions from "../../components/Instructions/Instructions";
import Stopwatch from "../../components/Stopwatch/Stopwatch";

function Home() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord(adjectives));
  const [round, setRound] = useState<number>(1);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [totalWrongGuesses, setTotalWrongGuesses] = useState<string[]>([]);
  const [gameLaunched, setGameLaunched] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const intervalIdRef = useRef<number | undefined>(undefined);
  const startTimerRef = useRef(0);

  function getRandomWord(words: string[]) {
    return words[Math.floor(Math.random() * words.length)].toUpperCase();
  }

  const addGuessedLetter = (letter: string) => {
    if (!wordToGuess.includes(letter)) {
      setTotalWrongGuesses((current) => [...current, letter]);
    }
    setGuessedLetters((current) => [...current, letter]);
  };

  const startStopWatch = () => {
    if (intervalIdRef.current) return;
    startTimerRef.current = Date.now() - elapsedTime;
    intervalIdRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTimerRef.current);
    }, 10);
  };

  const stopStopWatch = () => {
    if (!intervalIdRef.current) return;
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = undefined;
  };

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isLoser = totalWrongGuesses.length >= 7;

  useEffect(() => {
    if (isLoser) {
      stopStopWatch();
    }

    console.log("home page" + wordToGuess);
    console.log(guessedLetters);
  }, [isLoser]);

  const startNewRound = () => {
    setGuessedLetters([]);
    setWordToGuess(getRandomWord(adjectives));
    setRound((prev) => prev + 1);
  };

  const startNewGame = () => {
    stopStopWatch();
    setElapsedTime(0);
    setRound(1);
    setGuessedLetters([]);
    setTotalWrongGuesses([]);
    setWordToGuess(getRandomWord(adjectives));
    startStopWatch();
    setGameLaunched(true);
  };

  return (
    <>
      <div className="game-area">
        <Hangman wrongGuessesArray={totalWrongGuesses} />
        <div className="game">
          {gameLaunched ? (
            <>
              <div>
                <div className="extra-info">Tour {round}</div>
                <Stopwatch elapsedTime={elapsedTime} />
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
            <Instructions startNewGame={startNewGame} />
          )}
        </div>
      </div>
    </>
  );
}
export default Home;
