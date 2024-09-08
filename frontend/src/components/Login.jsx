import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login!</h3>
          <form  onSubmit={handleSubmit(onSubmit)} className="login-form mt-4">
            <div className="form-group flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="w-full md:w-2/3 rounded-lg bg-slate-100 p-2 border mt-4 text-black"
                name="email"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-400 mb-3">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="w-full md:w-2/3 p-2 bg-slate-100 border rounded-lg mt-4 text-black"
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is mandatory",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: 'Password cannot exceed 20 characters',
                  },
                })}
              />
              {errors.password && (
                <span className="text-sm text-red-400">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              className="mt-4 bg-red-200 px-6 py-2 rounded-lg"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            Not registered?{" "}
            <Link className="text-blue-400 underline" to={"/signup"}>
              Signup
            </Link>
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Login;
