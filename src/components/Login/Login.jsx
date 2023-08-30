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
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="email">
          Email
          <input {...email} type="email" id="email" required />
        </label>
        <label htmlFor="password">
          Password
          <input {...password} type="password" id="password" required />
        </label>

        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Login;
