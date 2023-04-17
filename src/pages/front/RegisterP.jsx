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
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Register</h1>
          <div className="inputs">
            <div className="textField">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName", {
                  required: "Please enter firstName !",
                })}
                type="text"
                placeholder="First Name"
              />
              <span>{errors.firstName?.message}</span>
            </div>
            <div className="textField">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName", {
                  required: "Please enter lastname !",
                })}
                type="text"
                placeholder="Last Name"
              />
              <span>{errors.lastName?.message}</span>
            </div>
          </div>
          <div className="txtField">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", {
                required: "Please enter username !",
              })}
              type="text"
              placeholder="Username"
            />
            <span>{errors.userName?.message}</span>
          </div>
          <div className="ckeckboxx">
            <input
              class="custom-checkbox"
              {...register("client")}
              type="checkbox"
            />
            <label htmlFor="checkbox">Client ?</label>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterP;
