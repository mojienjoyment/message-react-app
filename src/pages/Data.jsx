import { Link } from "react-router-dom";

function Data() {
  return (
    <div>
      <h1>Data Page</h1>
      <p>This is the data page.</p>
      <Link to="/">back to home</Link>
    </div>
  );
}

export default Data;