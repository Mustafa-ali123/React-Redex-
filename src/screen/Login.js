import { useDispatch } from "react-redux";
import {add} from '../config/redex/reducer/loginslice'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = () => {
  dispatch(
    add ({
      email: "abc@gmail.com",
      password: "123456",
    })
  );
  navigate("/");
};
  return (
    <>
      <h1>Login</h1>
      <button onClick={loginUser}>Login</button>
    </>
  ); 
  }

export default Login

