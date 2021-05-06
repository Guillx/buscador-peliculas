export default function Result({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt="poster" />
      <h3>
        {result.Title} ({result.Year})
      </h3>
    </div>
  );
}
