import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
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

  const modalRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      modal.showModal(); // Open the modal by default
    }
  }, []);
  return (
    <>
      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <Link
            to={"/"}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Register!</h3>
          <form  onSubmit={handleSubmit(onSubmit)} className="login-form mt-4">
            <div className="form-group flex flex-col">
              <label htmlFor="email">Username</label>
              <input
                className="w-full md:w-2/3 rounded-lg bg-slate-100 p-2 border mt-4"
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-sm text-red-400 mb-3">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="w-full md:w-2/3 rounded-lg bg-slate-100 p-2 border mt-4"
                name="email"
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-red-400 mb-3">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="w-full md:w-2/3 p-2 bg-slate-100 border rounded-lg mt-4"
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
              className="mt-4 hover:bg-red-300 duration-75 bg-red-200 px-6 py-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
          <p className="mt-4">
            Already have account{" "}
            <Link className="text-blue-400 underline" to={"/"}>
              Login
            </Link>
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Signup;
