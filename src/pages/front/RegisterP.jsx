import React from "react";
import { useForm } from "react-hook-form";
import "./Register.scss";
import { sendData } from "../../server/common";
import { TOKEN, USER } from "../../const";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterP = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (value) => {
    sendData("auth/register", value).then((res) => {
      localStorage.setItem(TOKEN, res.data.token);
      localStorage.setItem(USER, JSON.stringify(res.data.user));
      toast.success("Welcome! You have successfully");
      window.location.href = "/login";
    });
  };
  return (
    <div id="register">
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="txtField">
            <input
              {...register("firstName", {
                required: "Please enter firstName !",
              })}
              type="text"
              placeholder="First Name"
            />
            <span>{errors.firstName?.message}</span>
          </div>
          <div className="txtField">
            <input
              {...register("lastName", { required: "Please enter lastname !" })}
              type="text"
              placeholder="Last Name"
            />
            <span>{errors.lastName?.message}</span>
          </div>
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
          <div className="txtField">
            <input {...register("client")} type="checkbox" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterP;
