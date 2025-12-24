import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successful");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000)
          
        }
        
      })
      .catch((err) => {
        toast.error(`Error: ${err.response.data.message}`);
        setTimeout(() => {
          
        }, 3000);
      });
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-white text-black dark:bg-slate-800 dark:text-white border dark:border-slate-700">
        {/* ❌ remove method="dialog" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Login</h3>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="mt-6 flex justify-between items-center">
            {/* ✅ submit button */}
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700"
            >
              Login
            </button>

            <Link to="/signup" className="underline text-blue-500 text-sm">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
