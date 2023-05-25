import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";
import { sendData } from "../../server/common";
import { TOKEN, USER } from "../../const";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Links from "./Links";

const LoginP = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (value) => {
    setDisable(true);
    sendData("auth/login", value)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(TOKEN, res.data.token);
        localStorage.setItem(USER, JSON.stringify(res.data.user));
        console.log(res.data.user);

        if (res.data.user.role !== "user") {
          window.location.href = "/dashboard";
          toast.success("Welcome! You have successfully");
        } else {
          toast.info("You must verify yourself as a client !");
        }
      })
      .catch((err) => {
        toast.error("Username or password incorrect !");
      });
  };
  return (
    <div id="login">
      <Links />
      <div className="login">
        <form className="form">
          <h1>Login</h1>
          <div className="txtField">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: "Please enter username !" })}
              type="text"
              placeholder="Username"
            />
            <span>{errors.userName?.message}</span>
          </div>
          <div className="txtField">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: "Please enter password !" })}
              type="password"
              placeholder="Password"
            />
            <span>{errors.password?.message}</span>
          </div>
          <button
            onClick={handleSubmit(onSubmit)}
            className={disable ? "disabledTrue" : "disabledFalse"}
            disabled={disable}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginP;
