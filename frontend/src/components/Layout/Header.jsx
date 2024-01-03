import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Navbar from "./Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx"
import { IoIosArrowForward } from "react-icons/io"

const Header = ({ activeHeading }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden md:flex items-center justify-between h-[50px] my-[6px]">
          <div>
            <Link to="">+254705806889</Link>
          </div>

          <div className="flex">
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-3">
                <AiOutlineHeart size={30} color="#000" />
                <span className="absolute right-0 top-0 rounded-full bg-[#000080] w-4 h-4 p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-3">
                <AiOutlineShoppingCart size={30} color="#000" />
                <span className="absolute right-0 top-0 rounded-full bg-[#000080] w-4 h-4 p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer">
                <CgProfile size={30} color="#000" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          active ? "shadow-md fixed top-0 left-0 z-10 w-full" : ""
        } transition hidden md:flex items-center justify-between bg-[#fff] h-[70px] border-md`}
      >
        {/**logo section */}
        <div
          className={`${styles.section} rlative ${styles.noramlFlex} justify-between`}
          style={{ boxShadow: "0px 0px 0px rgba(255, 255, 255, .5}" }}
        >
          <div>
            <Link to="/">
              <img
                src="https://optica.africa/cdn/shop/t/121/assets/Optica_Logo_Primary.svg?v=69688584039873325631697273391"
                alt="Company-Logo"
                className="h-[5rem] w-auto"
              />
            </Link>
          </div>

          <div className={`${styles.noramlFlex} flex items-center`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search for product..."
              value=""
              className="h-[30px] px-2 border-[#3957db] border-b-2 rounded-md"
            />

            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-0.7 cursor-pointer justify-center items-center"
            />
          </div>
        </div>
      </div>

      {/* mobile header*/}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } w-full h-[60px] bg-white z-50 top-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft 
            size={40} 
            className="ml-4" 
            onClick={() => setOpen(true)}
            />
          </div>

          <div>
            <Link to="/">
              <img
                src="https://optica.africa/cdn/shop/t/121/assets/Optica_Logo_Primary.svg?v=69688584039873325631697273391"
                alt="Company-Logo"
                className="h-[4rem] w-auto"
              />
            </Link>
          </div>

          <div className="relative mr-[20px]">
            <AiOutlineShoppingCart size={30} color="#000" />
            <span className="absolute right-0 top-0 rounded-full bg-[#000080] w-4 h-4 p-0 m-0 text-white font-Poppins text-[12px] leading-tight text-center">
              0
            </span>
          </div>

          {/* cart popup*/}
        {/* wishlist popup*/}
        </div>

        {/*  sidebar header */}
        {open && (
          <div className={`fixed w-[70%] bg-[#0000005f] z-20 h-full top-0 left-0`} style={{transition:".5s ease-in"}}>
          <div className="fixed w-[70%] h-screen top-0 left-0 z-10 overflow-y-scroll bg-opacity-50 backdrop-filter backdrop-blur-md">
            <div className="w-full justify-between flex pr-3">
              <div>
                <div className="relative mr-[15px]">
                  <AiOutlineHeart size={30} className="mt-5 ml-3" />
                  <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                    0
                  </span>
                </div>
              </div>
  
              <RxCross1
              size={30}
              className="ml-4 mt-5"
              onClick={() => setOpen(false)}
              />
            </div>
  
            <div className="my-8 w-[92%] m-auto h-[40px] relative">
            <input
                type="text"
                placeholder="Search for product..."
                
                className="h-[30px] px-2 border-[#3957db] border-b-2 rounded-md"
              />
            </div>
  
            <Navbar active={activeHeading} />
            <div className="bg-[#000435] ml-4 w-[170px] h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer">
              <Link to="/appointment">
              <h5 className="text-[#fff] flex text-[15px]">
                Book Appointment 
                <IoIosArrowForward />
                </h5>
              </Link>
            </div>
            <br />
            <br />
            <br />
  
            <div className="flex w-full justify-between">
              <div className="flex">
                <Link to="/login"
                 className="text-[18px] pr-[10px] text-[#000000b7]"
                >
                  <CgProfile
                  size={30} className="ml-4"/>
                </Link>
                <Link to="/signup"
                className="text-[18px] text-[#fff]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>

      
      
    </>
  );
};

export default Header;
