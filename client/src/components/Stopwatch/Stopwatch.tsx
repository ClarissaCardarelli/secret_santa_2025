function Stopwatch({ elapsedTime }) {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  let seconds = String(Math.floor(totalSeconds % 60)).padStart(2, "0");

  return (
    <>
      <div className="extra-info">{`${minutes}:${seconds}`}</div>
    </>
  );
}

export default Stopwatch;
