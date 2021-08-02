import React from "react";
import { useHistory } from 'react-router-dom'
import { RegisterBg } from "../../assets";
import { Button, Gap, Link } from "../../components/atoms";
import Input from "../../components/atoms/Input";
import "./register.scss";
const Register = () => {
  let history =  useHistory()
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="images" />
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Input label="Full name" placeholder="Full name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Register" />
        <Gap height={10} />
        <Link title="Kembali ke login" onClick={() => history.push('/login')} />
      </div>
    </div>
  );
};

export default Register;
