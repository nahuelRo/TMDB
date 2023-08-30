import "./register.style.css";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const name = useInput();
  const lastname = useInput();
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    // POST

    // Navigate
    navigate("/");
  };

  return (
    <section className="register">
      <h2>Register</h2>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="name">
          Name
          <input {...name} type="text" id="name" />
        </label>
        <label htmlFor="lastname">
          Lastname
          <input {...lastname} type="text" id="lastname" />
        </label>
        <label htmlFor="email">
          Email
          <input {...email} type="text" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input {...password} type="text" id="password" />
        </label>

        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Register;
