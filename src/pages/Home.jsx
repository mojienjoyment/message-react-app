import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>welcome to SPA</h1>
      <nav>
        <ul>
          <li><Link to="/data">data</Link></li>
          <li><Link to="/name">name</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;