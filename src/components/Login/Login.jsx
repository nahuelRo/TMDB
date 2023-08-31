import axios from "axios";
import useInput from "../../hooks/useInput";
import "./login.style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    // POST
    axios
      .post(
        "http://localhost:3000/api/auth/login",
        {
          email: email.value,
          password: password.value,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        alert("User logged in");
        navigate("/");
      })
      .catch(() => alert("the user does not exist"));
  };

  const handlerClick = (e) => {
    e.preventDefault();
    setIsPassword(!isPassword);
  };

  return (
    <section className="login">
      <h2 className="login__title">Sign in</h2>
      <p className="login__description">
        Sign in and start managing your favorites movies!
      </p>
      <form className="login__form" onSubmit={handlerSubmit}>
        <input
          className="login__input"
          {...email}
          type="email"
          id="email"
          placeholder="Email"
          required
        />

        <label className="register__password">
          <input
            className="register__input"
            {...password}
            type={isPassword ? "password" : "text"}
            placeholder="Password"
            required
          />
          <span onClick={handlerClick} className="register__password-show">
            Show
          </span>
        </label>

        <input className="login__submit" type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
