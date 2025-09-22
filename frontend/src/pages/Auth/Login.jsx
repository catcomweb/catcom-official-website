import { useState } from "react";
import styles from "./Login.module.css";

const DUMMY_EMAIL = "admin@catcom.test";
const DUMMY_PASSWORD = "P@ssw0rd!";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.email === DUMMY_EMAIL && form.password === DUMMY_PASSWORD) {
      // store fake token
      localStorage.setItem("token", "fake-dev-token");
      onLogin?.();
    } else {
      setError("Invalid email or password. Try admin@catcom.test / P@ssw0rd!");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Admin Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
