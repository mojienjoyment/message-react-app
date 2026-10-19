import { Link } from "react-router-dom";

function Name() {
  return (
    <div>
      <h1>Name Page</h1>
      <p>This is the name page.</p>
      <Link to="/">back to home</Link>
    </div>
  );
}

export default Name;