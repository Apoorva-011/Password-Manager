import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-slate-800  text-white ">
      <div className="mycont flex justify-around items-center px-4 h-14 py-5">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul> */}
        <button className="text-white my-5 flex gap-4 items-center  ring-white ring-1 rounded-full bg-green-500">
          <img
            className="invert w-10 p-1"
            src="/icons/github.svg"
            alt="Github"
          />
          <span className="font-bold">Github</span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
