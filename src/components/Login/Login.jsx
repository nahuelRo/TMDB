import axios from "axios";
import useInput from "../../hooks/useInput";
import "./login.style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      });
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

        <input
          className="login__input"
          {...password}
          type="password"
          id="password"
          placeholder="Password"
          required
        />

        <input className="login__submit" type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
