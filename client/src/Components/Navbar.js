import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/c.png";
import AuthContext from "../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      {/* logo */}
      <Link to="/">
        <h1 className="text-lg italic font-medium tracking-widest text-white">Graphical Password</h1>
      </Link>

      <Link className="text-richblack-200" to="/">Home</Link>

      {!isLoggedIn ? (
        <div className="flex items-center gap-x-4">
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log in
            </button>
          </Link>
          <Link to="/signup ">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Sign up
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-x-4">
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => setIsLoggedIn(false)}
            >
              Log out
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
