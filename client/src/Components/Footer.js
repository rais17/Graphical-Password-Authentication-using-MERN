import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap items-center justify-center w-11/12 max-w-[1160px] py-4 mx-auto mt-12 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 md:justify-between">
      <p className="block text-base antialiased font-normal leading-relaxed text-white text-blue-gray-900">
        © 2023 Graphical Password Authentication
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a
            href="#"
            className="block text-base antialiased font-normal leading-relaxed text-white transition-colors text-blue-gray-900 hover:text-[#3b82f6]"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-base antialiased font-normal leading-relaxed text-white transition-colors text-blue-gray-900 hover:text-[#3b82f6]"
          >
            License
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-base antialiased font-normal leading-relaxed text-white transition-colors text-blue-gray-900 hover:text-[#3b82f6]"
          >
            Contribute
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-base antialiased font-normal leading-relaxed text-white transition-colors text-blue-gray-900 hover:text-[#3b82f6]"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer