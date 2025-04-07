import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useSignin from "../hooks/useSignin";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
});

const Login = ({ setIsloginPage }) => {
  const [apiDone,setApiDone] = useState(false)
  const navigate = useNavigate()
  const {loading,login} = useSignin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const res = login(data)
    if(res){
      setApiDone(true)
      navigate("/dashboard")
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <Link to={"/"}>
        <h1>Expensza</h1>
      </Link>
      <div className="text-6xl font-semibold">
        <h3 className="text-6xl">Hello,</h3>
        <h3>Welcome Back</h3>
        <p className="text-base font-normal text-black/60 p-2">
          Hey, welcome back to your special place
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="*:mb-4 w-[80%]">
        <div>
          <input
            type="text"
            className={`border w-full border-black/20 outline-none rounded-lg text-sm p-2 ${errors.email ? "border-red-500" : ""}`}
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            className={`border w-full border-black/20 outline-none rounded-lg text-sm p-2 ${errors.password ? "border-red-500" : ""}`}
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <input type="checkbox" id="remember" className="accent-blue-600 checkbox-lg w-5 h-5" />
            <label className="text-sm text-black/60" htmlFor="remember">
              Remember me
            </label>
          </div>
          <div>
            <p className="text-sm text-blue-600">Forgot Password?</p>
          </div>
        </div>
        <button
          type="submit"
          className="p-4 w-40 bg-blue-600 text-white px-10 rounded-full hover:text-blue-600 hover:bg-transparent border-blue-600 border duration-200"
          disabled= {loading}
        >
         {
          loading?<SyncLoader size={7} color="white"/>:"Sign In"
         }
        </button>
      </form>
      <div className="text-sm text-black/60 flex gap-1">
        <p>Don't have an account?</p>
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => {
            setIsloginPage(false);
          }}
        >
          Signup
        </span>
      </div>
    </div>
  );
};

export default Login;
