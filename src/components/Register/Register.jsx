import "./register.style.css";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
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
      .then(() => console.log("User created"))
      .catch((error) => console.log(error));
  };

  return (
    <section className="register">
      <h2>Register</h2>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="name">
          Name
          <input {...name} type="text" id="name" required />
        </label>
        <label htmlFor="lastname">
          Lastname
          <input {...lastname} type="text" id="lastname" required />
        </label>
        <label htmlFor="email">
          Email
          <input {...email} type="text" id="email" required />
        </label>
        <label htmlFor="password">
          Password
          <input {...password} type="text" id="password" required />
        </label>

        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Register;
