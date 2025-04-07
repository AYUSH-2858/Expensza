import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useSignUp from "../hooks/useSignUp";

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[!@#$%^&*]/, "Password must contain at least one special character"),
  agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

const Signup = ({ setIsloginPage }) => {
  const {loading,registerUser}  = useSignUp()
  const [apiDone,setApiDone] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async(data) => {
    const res = await registerUser(data)
    if(res){
      setApiDone(true)
      setIsloginPage(true)
    }
    
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link to={"/"}>
          <h1>Expensza</h1>
        </Link>
      </div>
      <div className="text-6xl font-semibold">
        <h3 className="text-6xl">Hello,</h3>
        <h3>Get Started</h3>
        <p className="text-base font-normal text-black/60 p-2">
          Hey, welcome! Let's get you started on your journey.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="*:mb-4 w-[80%]">
        <div>
          <input
            type="text"
            className={`border w-full border-black/20 outline-none rounded-lg text-sm p-2 ${errors.username ? "border-red-500" : ""}`}
            placeholder="Username"
            {...register("username")}
          />
          {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
        </div>
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
        <div className="flex gap-1">
          <input type="checkbox" {...register("agreeToTerms")} className="accent-blue-600 checkbox-lg w-5 h-5" />
          <label className="text-sm text-black/60">
            Agree to our <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy</span>.
          </label>
        </div>
        {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms.message}</p>}
        <button
          type="submit"
          className="p-4 bg-blue-600 text-white px-10 rounded-full hover:text-blue-600 hover:bg-transparent border-blue-600 border duration-200"
        >
          Sign Up
        </button>
      </form>
      <div className="text-sm text-black/60 flex gap-1">
        <p>Already have an account?</p>
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => {
            setIsloginPage(true);
          }}
        >
          Sign In
        </span>
      </div>
    </div>
  );
};

export default Signup;
