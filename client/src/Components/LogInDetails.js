import React, {useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const LogInDetails = () => {

  const navigate = useNavigate();
  const [isPasswordText, setIsPasswordText] = useState(false);
  const { fetchDataFromDB, setResponseData } = useContext(AuthContext);

  const [finalData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const result = await fetchDataFromDB("userlogin", finalData);
    setResponseData(result);
    
    if (result.success === false) {
      toast.error(result.message);
      if (
        result.status === 400 ||
        result.status === 401 ||
        result.status === 500
      )
        return;
      else if (result.status === 404) {
        navigate("/signup");
        return;
      }
    } else {
      navigate("/authimages/userlogin", {
        state: finalData,
      });
    };

  }

  return (
    <form method="POST" onSubmit={submitForm} className="flex flex-col mt-5">
      {/* email */}
      <div className="w-full space-y-1">
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

      {/* password */}
      <div className="relative w-full mt-3 space-y-1">
        <label
          className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
          htmlFor="password"
        >
          Password <sup className="text-pink-200">*</sup>
        </label>
        <input
          required
          type={!isPasswordText ? "password" : "text"}
          name="password"
          value={finalData.password}
          id="password"
          placeholder="enter your password..."
          onChange={changeHandler}
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
        <div
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setIsPasswordText((prev) => !prev)}
        >
          {isPasswordText ? (
            <BiHide fontSize={24} fill="#AFB2BF" />
          ) : (
            <BiShow fontSize={24} fill="#AFB2BF" />
          )}
        </div>
        <Link to="#">
          <p className="mt-1 ml-auto text-xs text-blue-100 max-w-max">
            Forgot Password
          </p>
        </Link>
      </div>

      <button
        className="
        w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-10"
        type="submit"
      >
        Next
      </button>
    </form>
  );
};

export default LogInDetails;
