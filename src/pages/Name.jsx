import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_NAME = "username";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

function readCookie(key) {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : "";
}

function writeCookie(key, value) {
  document.cookie = `${key}=${encodeURIComponent(
    value
  )}; max-age=${COOKIE_MAX_AGE}; path=/`;
}

function deleteCookie(key) {
  document.cookie = `${key}=; max-age=0; path=/`;
}

function Name() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = readCookie(COOKIE_NAME);
    if (saved) setName(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    writeCookie(COOKIE_NAME, value);
    setName(value);
  };

  const handleReset = () => {
    deleteCookie(COOKIE_NAME);
    setName("");
    setInput("");
  };

  return (
    <>
      <h1>Name Page</h1>

      {name ? (
        <div className="greeting-box">
          <p className="greeting">
            Hello <strong>{name}</strong>
          </p>
          <button className="change-btn" onClick={handleReset}>
            change name
          </button>
        </div>
      ) : (
        <form className="name-form" onSubmit={handleSubmit}>
          <label htmlFor="name-input">Enter your name</label>
          <div className="form-row">
            <input
              id="name-input"
              type="text"
              placeholder="Your name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button type="submit">save</button>
          </div>
        </form>
      )}

      <Link className="back" to="/">back to home</Link>
    </>
  );
}

export default Name;