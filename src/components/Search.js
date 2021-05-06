export default function Search({ handleInput, search }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Busca una película..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      ></input>
    </section>
  );
}
