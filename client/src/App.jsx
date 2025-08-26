import { useState } from "react";
import axios from "axios";

const App = () => {
  const [form, setform] = useState({ username: "", password: "" });
  const [loggedInUser, setLoggeddInUser] = useState(null);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "https://react-express-auth-production.up.railway.app/register",
        form
      );
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://react-express-auth-production.up.railway.app/login",
        form
      );
      setLoggeddInUser(res.data.username);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  if (loggedInUser) {
    return <h2>Welcome, {loggedInUser} 🎉</h2>;
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        width: "250px",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default App;
