function Name({ onNavigate }) {
  return (
    <>
      <h1>Name Page</h1>
      <p>This is the name page.</p>
      <button className="back" onClick={() => onNavigate("home")}>
        back to home
      </button>
    </>
  );
}

export default Name;