import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

const Contact = () => {
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
      <Navbar btnName={"Logout"} />

      <div className="flex items-center justify-center mt-32 p-2">
        <div className="md:w-4/12 w-full border border-slate-200 rounded-lg shadow p-4">
          <h3 className="font-bold text-2xl">Contact us!</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form mt-4">
            <div className="form-group flex flex-col">
              <label htmlFor="email">Username</label>
              <input
                placeholder="Enter your name"
                className="w-full md:w-2/3 text-black rounded-lg bg-slate-100 p-2 border mt-4"
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
                className="w-full md:w-2/3 text-black rounded-lg bg-slate-100 p-2 border mt-4"
                placeholder="Enter your Email"
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
              <label htmlFor="comments">Comments:</label>
              <textarea
                className="bg-slate-100 p-2 mt-3 rounded-xl"
                placeholder="Type your message"
                id="comments"
                {...register("comments", {
                  required: "Comments are required",
                  minLength: {
                    value: 10,
                    message: "Comments must be at least 10 characters long",
                  },
                  maxLength: {
                    value: 200,
                    message: "Comments cannot exceed 200 characters",
                  },
                })}
                rows="4"
                cols="50"
                style={{ resize: "none" }} // Optional: to disable resizing
              />
              {errors.comments && (
                <span className="text-sm text-red-400">
                  {errors.comments.message}
                </span>
              )}
            </div>
            <button
              className="mt-10 bg-blue-500 text-white hover:bg-blue-600 duration-75 px-6 py-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
