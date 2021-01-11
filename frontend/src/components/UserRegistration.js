import React, { useState } from "react";
import axios from "axios";

const UserRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const recordFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const recordLastName = (e) => {
    setLastName(e.target.value);
  };

  const recordEmail = (e) => {
    setEmail(e.target.value);
  };

  const recordPassword = (e) => {
    setPassword(e.target.value);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    const res = await axios.post("http://localhost:3001/information", newUser);
    console.log(res);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        First Name:
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          onChange={recordFirstName}
          value={firstName}
        />
        Last Name:
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          onChange={recordLastName}
            value={lastName}
        />
        Email:
        <input
          type="email"
          name="email"
          placeholder="email address"
          onChange={recordEmail}
value={email}
        />
        Password:
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={recordPassword}
value={password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
