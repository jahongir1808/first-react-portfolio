import React from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";

const LoginP = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <div id="login">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="txtField">
            <input {...register("userName", { required: true })} type="text" />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txtField">
            <input
              {...register("password", { required: true })}
              type="password"
            />
            <span></span>
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginP;
