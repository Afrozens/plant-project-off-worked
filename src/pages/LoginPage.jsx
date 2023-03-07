import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const initialStateLogin = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [login, setLogin] = useState(initialStateLogin);
  const [error, setError] = useState("")
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signin(login.email, login.password);
      setLogin(initialStateLogin)
      navigate("/")

    } catch (error) {
      console.log(error.code)
      if (error.code === "auth/internal-error") {
        setError("Invalid email")
      } //more validations here!
    }
  };

  return (
    <>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={login.email}
        placeholder="asdasd@gmail.com"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={login.password}
      />

      <button>Login</button>
    </form>
    </>
  );
};

export default LoginPage;
