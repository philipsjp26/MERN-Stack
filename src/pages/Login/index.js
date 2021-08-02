import React from "react";
import { useHistory } from 'react-router-dom'
import { Button, Gap, Link } from "../../components/atoms";
import Input from "../../components/atoms/Input";
import { LoginBg } from "../../assets";

const Login = () => {
  let history = useHistory()
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="images" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Login" onClick={() => history.push('/') } />
        <Gap height={10} />
        <Link title="Daftar" onClick={() => history.push('/register')}/>
      </div>
    </div>
  );
};

export default Login;
