import { Link } from "react-router-dom";

function Name() {
  return (
    <>
      <h1>Name Page</h1>
      <p>This is the name page.</p>
      <Link className="back" to="/">back to home</Link>
    </>
  );
}

export default Name;