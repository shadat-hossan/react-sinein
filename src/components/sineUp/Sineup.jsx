import { FaEye, FaEyeSlash, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import style from "./sineUp.module.css";
import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState(true);

  const seePassword = () => {
    setPassword(!password);
  };

  return (
    <div id={style.sineUp}>
      <div className={style.sineUpContainer}>
        <div className={style.websitSineUp}>
          <h1>
            Saff<span>ron</span>
          </h1>
        </div>
        <div className={style.sineUpFrom}>
          <h5>Create a new account</h5>
          <p>It's quick and easy.</p>
          <form className={style.sinfinallInput}>
            <div className={style.input}>
              <input type="text" placeholder="Frist Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={style.passwordInput}>
              <div className={style.subPassInput}>
                <input type="text" placeholder="Phone Number" />
                <div className="eay">
                  <FaPhone />
                </div>
              </div>
            </div>
            <div className={style.passwordInput}>
              <div className={style.subPassInput}>
                <input type="email" placeholder="Email" />
                <div className="eay">
                  <MdEmail />
                </div>
              </div>
            </div>
            <div className={style.input}>
              <input type="number" placeholder="Identification Number" />
              <input type="number" placeholder="Postcode" />
            </div>
            <div className={style.qustyionExpart}>
              <span>Are you an expert ?</span>
              <label>
                <input type="radio" name="choice-radio" />
                Yes
              </label>
              <label>
                <input type="radio" name="choice-radio" />
                No
              </label>
            </div>
            <div className={style.passwordInput}>
              <div className={style.subPassInput}>
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

export default Login;
