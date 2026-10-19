import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Data() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h1>Data Page</h1>
        <p>Loading...</p>
        <Link className="back" to="/">back to home</Link>
      </>
    );
  }

  return (
    <>
      <h1>Data Page</h1>
      {user ? (
        <table className="data-table">
          <tbody>
            <tr>
              <th>ID</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{user.website}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                {user.address.street}, {user.address.suite}
                <br />
                {user.address.city}, {user.address.zipcode}
                <br />
                <span className="geo">
                  Geo: {user.address.geo.lat}, {user.address.geo.lng}
                </span>
              </td>
            </tr>
            <tr>
              <th>Company</th>
              <td>
                <strong>{user.company.name}</strong>
                <br />
                {user.company.catchPhrase}
                <br />
                <span className="bs">{user.company.bs}</span>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
      <Link className="back" to="/">back to home</Link>
    </>
  );
}

export default Data;