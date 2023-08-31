import "./register.style.css";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [isPassword, setIsPassword] = useState(true);
  const name = useInput();
  const lastname = useInput();
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    // POST
    axios
      .post("http://localhost:3000/api/auth/register", {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      })
      .then(() => {
        alert("User created");
        navigate("/");
      });
  };

  const handlerClick = (e) => {
    e.preventDefault();
    setIsPassword(!isPassword);
  };

  return (
    <section className="register">
      <h2 className="register__title">Sign up</h2>
      <form className="register__form" onSubmit={handlerSubmit}>
        <div className="register__fullname">
          <input
            className="register__input"
            {...name}
            type="text"
            placeholder="Name"
            required
          />

          <input
            className="register__input"
            {...lastname}
            type="text"
            placeholder="Lastname"
            required
          />
        </div>

        <input
          className="register__input"
          {...email}
          type="email"
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

        <input className="register__submit" type="submit" value="Sign up" />
      </form>
    </section>
  );
};

export default Register;
