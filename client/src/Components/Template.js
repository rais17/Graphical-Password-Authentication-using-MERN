import React from "react";
import LogInDetails from "./LogInDetails";
import SignUpDetails from "./SignUpDetails";
import { FcGoogle } from "react-icons/fc"


const Template = ({ image, formType, setIsLoggedIn }) => {

  return (
    <div className="flex justify-center md:justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
      {/* left section */}
      <div className="w-11/12 max-w-[450px]">
        {formType === "login" ? (
          <LogInDetails setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignUpDetails setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex items-center w-full my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <button
          className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 "
        >
          <FcGoogle fontSize={25} />
          <p>Sign In With Google</p>
        </button>
      </div>

      {/* right section */}
      <div className="w-11/12 max-w-[450px] hidden py-4 md:block">
        <img
          alt="Students"
          loading="lazy"
          className="rounded-full shadow-2xl drop-shadow-2xl"
          src={image}
        />
      </div>
    </div>
  );
};

export default Template;
