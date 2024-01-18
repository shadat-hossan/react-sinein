import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import "./login.css";
import { useState } from "react";

const Sineup = () => {
  const [password, setPassword] = useState(true);

  const seePassword = () => {
    setPassword(!password);
  };

  return (
    <div id="login">
      <div className="loginContainer">
        <div className="websitLogo">
          <h1>
            Saff<span>ron</span>
          </h1>
        </div>
        <div className="loginFrom">
          <h5>Login to Saffron</h5>
          <form className="lofinallInput">
            <div className="input userName">
              <input type="text" placeholder="User name or Email" />
            </div>
            <div className=" passwordInput">
              <div className="subPassInput">
                <input
                  type={password ? "password" : "text"}
                  placeholder="password"
                />
                <div className="eay" onClick={seePassword}>
                  {password ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            <button type="submit">Log in</button>
          </form>
          <div className="forgatPasswordLink">
            <a href="#">Forgotten account?</a>
          </div>
          <hr id="bordweHr" />
          <div className="createAcount">
            <a href="#">Create new account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sineup;
