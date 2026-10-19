function Data({ onNavigate }) {
  return (
    <>
      <h1>Data Page</h1>
      <p>This is the data page.</p>
      <button className="back" onClick={() => onNavigate("home")}>
        back to home
      </button>
    </>
  );
}

export default Data;