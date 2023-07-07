import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SignUpDetails = () => {
  const navigate = useNavigate();

  const [isPasswordText, setIsPasswordText] = useState({
    createPassword: false,
    confirmPassword: false,
  });

  const [finalData, setSignUpFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const [accountType, setAccountType] = useState("student");

  const changeHandler = (event) => {
    setSignUpFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (finalData.createPassword !== finalData.confirmPassword) return;
    navigate("/authimages/usersignup", {
      state: finalData,
    });
  };

  return (
    <div>
      {/* student-Instructor tab */}
      <div className="flex p-1 my-6 rounded-full bg-richblack-800 gap-x-1 max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>

        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form method="POST" onSubmit={submitForm}>
        <div className="flex gap-x-4 mt-[20px]">
          {/* first name */}
          <div className="w-full space-y-1">
            <label
              className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
              htmlFor="firstName"
            >
              First Name<sup className="text-pink-200">*</sup>
            </label>
            <input
              required
              type="text"
              name="firstName"
              value={finalData.firstName}
              id="firstName"
              placeholder="First Name"
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </div>

          {/* last name */}
          <div className="w-full space-y-1">
            <label
              className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
              htmlFor="lastName"
            >
              Last Name <sup className="text-pink-200">*</sup>
            </label>
            <input
              required
              type="text"
              name="lastName"
              value={finalData.lastName}
              id="lastName"
              placeholder="Last Name"
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </div>
        </div>

        {/* email */}
        <div className="w-full mt-[20px] space-y-1">
          <label
            className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
            htmlFor="email"
          >
            Email Address <sup className="text-pink-200">*</sup>
          </label>
          <input
            required
            type="email"
            name="email"
            value={finalData.email}
            id="email"
            placeholder="enter your email..."
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </div>

        {/* create password */}
        <div className="w-full flex gap-x-4 mt-[20px]">
          <div className="relative w-full space-y-1">
            <label
              className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
              htmlFor="createPassword"
            >
              Create Password <sup className="text-pink-200">*</sup>
            </label>
            <input
              required
              type={!isPasswordText.createPassword ? "password" : "text"}
              name="createPassword"
              value={finalData.createPassword}
              id="createPassword"
              placeholder="enter your password..."
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() =>
                setIsPasswordText((prevState) => ({
                  ...prevState,
                  createPassword: !isPasswordText.createPassword,
                }))
              }
            >
              {isPasswordText.createPassword ? (
                <BiHide fontSize={24} fill="#AFB2BF" />
              ) : (
                <BiShow fontSize={24} fill="#AFB2BF" />
              )}
            </div>
          </div>

          {/* confirm password */}
          <div className="relative w-full space-y-1">
            <label
              className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
              htmlFor="confirmPassword"
            >
              Confirm Password <sup className="text-pink-200">*</sup>
            </label>
            <input
              required
              type={!isPasswordText.confirmPassword ? "password" : "text"}
              name="confirmPassword"
              value={finalData.confirmPassword}
              id="confirmPassword"
              placeholder="confirm password..."
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() =>
                setIsPasswordText((prevState) => ({
                  ...prevState,
                  confirmPassword: !isPasswordText.confirmPassword,
                }))
              }
            >
              {isPasswordText.confirmPassword ? (
                <BiHide fontSize={24} fill="#AFB2BF" />
              ) : (
                <BiShow fontSize={24} fill="#AFB2BF" />
              )}
            </div>
          </div>
        </div>

        <button
          className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SignUpDetails;
