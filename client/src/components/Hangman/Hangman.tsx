import "./Hangman.css";

type HangmanProps = {
  wrongGuessesArray: string[];
};

function Hangman({ wrongGuessesArray }: HangmanProps) {
  return (
    <div className="hangman-container">
      <div className="img-container">
        <img className="santa" src="emeric-santa.png" alt="" />
        <div className="gifts-container">
          {wrongGuessesArray.map((_, index) => (
            <img key={index} className="gifts" src="gifts.png" alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hangman;
