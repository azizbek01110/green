import { useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const state = useLocation();
  console.log(state);

  return (
    <div className="login-container">
      <h1 className='raqam'>Telefon raqam</h1>
      <p className='raqam p'>Iltimos telefon raqamingizni kiriting</p>
      <input type="text" placeholder="+998 xxx xx xx" />
      <br />
      <button className='btn'>Login</button>
      <p className="forgot-password">Forgot Password?</p>
    </div>
  );
};

export default Login;
