import React from 'react'
import stockLogo from '../assets/stockLogo3.jpeg'

const Home = () => {
  return (
    <div className="max-w-[1160px] w-11/12 mx-auto grid grid-col-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-4 lg:pt-20 place-items-center mb-32">
      {/* left side */}
      <div className="space-y-5 lg:p-4">
        <div>
          <h1 className="text-5xl font-semibold text-center text-white font-inter lg:text-left">
            Discover
          </h1>
          <h1 className="text-5xl font-semibold text-center text-white font-inter lg:text-left">
            Graphical Password Authentication
          </h1>
        </div>
        <p className="text-2xl text-center text-white lg:text-left font-inter">
          A Novel Approach For Security And User Experience Of Graphical
          Password Authentication.
        </p>
      </div>
      {/* right-side */}
      <div className="">
        <img
          className="transition-all duration-500 rounded-lg shadow-2xl hover:scale-95"
          src={stockLogo}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home
