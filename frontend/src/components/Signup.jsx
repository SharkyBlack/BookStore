import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const userInfo =
        {
          fullname: data.fullname,
          email: data.email,
          password: data.password,
        }
        await axios.post("http://localhost:4001/user/signup",userInfo).then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success("Signup Successful");
            navigate(from,{replace:true});
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user));

        }).catch((err)=>{
          toast.error(`Error: ${err.response.data.message}`);  
        })
      };
  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-white text-black dark:bg-slate-800 dark:text-white border dark:border-slate-700 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-lg">Signup</h3>

        <div className="mt-4">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-full px-3 py-2 mt-2 border rounded-md outline-none bg-transparent dark:border-slate-600"
            {...register("fullname", { required: true })}
          />
           <br />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
        </div>

        <div className="mt-4">
          <span>Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 mt-2 border rounded-md outline-none bg-transparent dark:border-slate-600"
            {...register("email", { required: true })}
          />
          <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
        </div>

        <div className="mt-4">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 mt-2 border rounded-md outline-none bg-transparent dark:border-slate-600"
            {...register("password", { required: true })}
          />
          <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        </div>

        <div className="mt-6 flex justify-center">
          <button className="bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200">
            Signup
          </button>
          <p className="mt-2 mx-10 px-2">
            Already Have Account?
            <button
            className="underlne text-blue-500 cursor-pointer" onClick={()=>{
                document.getElementById("my_modal_3").showModal()
            }}>Login</button>
            
          </p>
          <Login />
        </div>

        </form>
      </div>
    </dialog>
  );
};

export default Signup;
