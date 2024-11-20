import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMdArrowRoundForward } from "react-icons/io";

import { IoMdClose } from "react-icons/io";

function Header() {
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const modalRef = useRef(null);

  function burgerClicked() {
    setActive(!active);
  }

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setActive(false);
    }

    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".headerContent",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    );
  }, []);

  useEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [active, isModalOpen]);

  return (
    <div className="px-6 pt-5 md:px-12 xl:px-24">
      <div className="headerContent flex justify-between items-center mb-5">
        <div
          className="left-content flex items-center text-2xl xl:text-[1.7rem] font-semibold tracking-wide gap-2 text-secondary-lighter cursor-pointer"
          onClick={() => {
            navigate("/");
            setActive(false);
          }}
        >
          <img src={logo} alt="brand-logo" className="w-16 hidden xl:inline" />
          Bimaakawach
        </div>
        <div className="right-content relative">
          <div
            ref={hamburgerRef}
            className={`hamburger ${active ? "is-active" : ""} opacity-80`}
            id="hamburger-9"
            onClick={burgerClicked}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="border-b absolute w-full left-0"></div>
      <div
        ref={navRef}
        className={`absolute bg-[#69818D] z-10 w-full right-0 transition-all duration-700 ease-in-out px-6 md:px-12 xl:px-24 overflow-hidden ${
          active ? "h-screen" : "h-0"
        }`}
      >
        <div className="nav-links text-2xl grid gap-5 xl:gap-8 xl:flex xl:flex-col xl:items-center">
          <div
            className="group border-b pb-2 mt-10 flex items-center justify-between text-primary/85 hover:text-primary xl:w-2/3 cursor-pointer"
            onClick={() => {
              navigate("/");
              setActive(false);
            }}
          >
            Home{" "}
            <IoMdArrowRoundForward className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
          </div>
          <div
            className="group border-b pb-2  flex items-center justify-between text-primary/85 hover:text-primary xl:w-2/3 cursor-pointer"
            onClick={() => {
              navigate("/about-us");
              setActive(false);
            }}
          >
            About{" "}
            <IoMdArrowRoundForward className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
          </div>
          <div
            className="group border-b pb-2 flex items-center justify-between text-primary/85 hover:text-primary xl:w-2/3 cursor-pointer"
            onClick={() => {
              navigate("/claim");
              setActive(false);
            }}
          >
            Claim{" "}
            <IoMdArrowRoundForward className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
          </div>
          <div
            className="group border-b pb-2 flex items-center justify-between text-primary/85 hover:text-primary xl:w-2/3 cursor-pointer"
            onClick={() => {
              navigate("/insurance-product");
              setActive(false);
            }}
          >
            Insurance Product{" "}
            <IoMdArrowRoundForward className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
          </div>
          <div
            className="group border-b pb-2 flex items-center justify-between text-primary/85 hover:text-primary xl:w-2/3 cursor-pointer"
            onClick={() => {
              navigate("/advantage-psop");
              setActive(false);
            }}
          >
            Advantage PoSP{" "}
            <IoMdArrowRoundForward className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
          </div>
          <div
            className="group border-b pb-2 flex items-center justify-between text-primary/85 hover:text-primary xl:w-2/3 cursor-pointer"
            onClick={() => {
              navigate("/contact");
              setActive(false);
            }}
          >
            Contact{" "}
            <IoMdArrowRoundForward className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
          </div>
          <div
            className="group flex items-center justify-between text-primary/85 hover:text-primary xl:w-2/3 cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
              setActive(false);
            }}
          >
            Login{" "}
            <IoMdArrowRoundForward className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 w-96 shadow-lg relative"
          >
            <IoMdClose
              className="absolute top-3 right-3 text-2xl text-gray-600 cursor-pointer"
              onClick={() => setIsModalOpen(false)} // Close modal
            />
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <button className="w-full bg-secondary-lightest text-lg text-primary mt-2 py-2 rounded-lg">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
