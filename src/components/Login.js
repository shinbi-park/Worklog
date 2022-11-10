import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [LoginId, setLoginId] = useState("");
  const [LoginPw, setLoginPw] = useState("");
  const navigate = useNavigate();
  const ref = useRef();

  const access = () => {
    if (LoginId === "admin" && LoginPw === "admin") {
      navigate("/list");
    } else {
      alert("아이디 또는 패스워드를 확인하세요");
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      access();
    }
  };

  return (
    <div className="Login">
      <div className="Login_wrap">
        <div className="Login_id">
          <label>ID</label>
          <input
            type="id"
            value={LoginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>
        <div className="Login_pw">
          <label>PW</label>
          <input
            type="password"
            value={LoginPw}
            onKeyPress={handleEnter}
            onChange={(e) => setLoginPw(e.target.value)}
          />
        </div>
      </div>
      <div className="btn">
        <button onClick={access}>로그인</button>
      </div>
    </div>
  );
};

export default Login;
