import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
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
          <input type="text" />

          <h5> 비밀번호 </h5>
          <input type="password" />

          <button type="submit" className="login_signInButton">
            로그인 하기
          </button>

          <p>이용약관</p>

          <button className="login_registerButton">회원가입하기</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
