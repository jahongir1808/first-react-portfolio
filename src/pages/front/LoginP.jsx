import React from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { sendData } from "../../const/common";
import { TOKEN } from "../../const";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (value) => {
    sendData("auth/login", value)
    .then((res) => {
        console.log(res.data);
        localStorage.setItem(TOKEN, res.data.token);
        toast.success("Welcome! You have successfully");
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        toast.error("Username or password incorrect !");
      });
  };
  return (
    <div id="login">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="txtField">
            <input
              {...register("username", { required: "Please enter username !" })}
              type="text"
              placeholder="Username"
            />
            <span>{errors.userName?.message}</span>
          </div>
          <div className="txtField">
            <input
              {...register("password", { required: "Please enter password !" })}
              type="password"
              placeholder="Password"
            />
            <span>{errors.password?.message}</span>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginP;
