function Home({ onNavigate }) {
  return (
    <>
      <h1>welcome to SPA</h1>
      <nav>
        <ul>
          <li><button onClick={() => onNavigate("data")}>data</button></li>
          <li><button onClick={() => onNavigate("name")}>name</button></li>
        </ul>
      </nav>
    </>
  );
}

export default Home;