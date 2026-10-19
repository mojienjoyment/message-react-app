import { Link } from "react-router-dom";

function Data() {
  return (
    <>
      <h1>Data Page</h1>
      <p>This is the data page.</p>
      <Link className="back" to="/">back to home</Link>
    </>
  );
}

export default Data;