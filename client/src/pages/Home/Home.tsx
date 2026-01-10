import { useEffect, useRef, useState } from "react";
import "./Home.css";
import adjectives from "../../data/adjectives";
import Hangman from "../../components/Hangman/Hangman";
import Word from "../../components/Word/Word";
import Keyboard from "../../components/Keyboard/Keyboard";
import Instructions from "../../components/Instructions/Instructions";
import ScoreModal from "../../components/ScoreModal/ScoreModal";

function Home() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [round, setRound] = useState<number>(1);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [totalWrongGuesses, setTotalWrongGuesses] = useState<string[]>([]);
  const [gameLaunched, setGameLaunched] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const intervalIdRef = useRef<number | undefined>(undefined);
  const startTimerRef = useRef(0);
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  function getRandomWord(words: string[]) {
    let randomWord = words[Math.floor(Math.random() * words.length)];

    while (usedWords.includes(randomWord)) {
      randomWord = words[Math.floor(Math.random() * words.length)];
    }

    setUsedWords((prev) => [...prev, randomWord]);

    return randomWord.toUpperCase();
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

  const minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(
    2,
    "0"
  );

  const isRoundWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isLoser = totalWrongGuesses.length >= 7;

  useEffect(() => {
    if (isLoser) {
      stopStopWatch();
    }

    if (round === 21) {
      stopStopWatch();
      setModalOpen(true);
    }

    console.log("current word to guess" + wordToGuess);
    console.log("usedWords" + usedWords);
  }, [isLoser, usedWords, wordToGuess]);

  const startNewRound = () => {
    setGuessedLetters([]);

    const nextRound = round + 1;
    setRound(nextRound);

    if (nextRound > adjectives.length) {
      setWordToGuess("");
    } else {
      setWordToGuess(getRandomWord(adjectives));
    }
  };

  const startNewGame = () => {
    stopStopWatch();
    setElapsedTime(0);
    setRound(19);
    setUsedWords([]);
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
                <div>{`${minutes}:${seconds}`}</div>
              </div>
              <Word
                reveal={isLoser}
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
              />
              <Keyboard
                disabled={isLoser || isRoundWinner}
                addGuessedLetter={addGuessedLetter}
                activeLetters={guessedLetters.filter((letter) =>
                  wordToGuess.includes(letter)
                )}
                inactiveLetters={guessedLetters.filter(
                  (letter) => !wordToGuess.includes(letter)
                )}
              />
              {isRoundWinner && (
                <button className="button" onClick={startNewRound}>
                  Tour suivant
                </button>
              )}
              {isLoser && (
                <button className="button" onClick={() => setModalOpen(true)}>
                  Mon score
                </button>
              )}

              {modalOpen && (
                <ScoreModal
                  round={round}
                  minutes={minutes}
                  seconds={seconds}
                  setModalOpen={setModalOpen}
                  startNewGame={startNewGame}
                />
              )}
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
