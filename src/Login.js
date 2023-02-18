import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    auth
      .createUserWithEmailandPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1> 로그인 </h1>
        <form>
          <h5>이메일 </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5> 비밀번호 </h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_signInButton" type="submit" onClick={signIn}>
            로그인 하기
          </button>

          <p>이용약관</p>

          <button className="login_registerButton" onClick={register}>
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
