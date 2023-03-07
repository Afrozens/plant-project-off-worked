import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const initialStateRegister = {
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [register, setRegister] = useState(initialStateRegister);
  const [error, setError] = useState("")
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signup(register.email, register.password);
      setRegister(initialStateRegister)
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
        value={register.email}
        placeholder="asdasd@gmail.com"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={register.password}
      />

      <button>Register</button>
    </form>
    </>
  );
};

export default RegisterPage;
