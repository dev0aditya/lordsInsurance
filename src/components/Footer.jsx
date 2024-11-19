import React from "react";
import logo from "../assets/logo.png";
import { GrInstagram } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import irdaLogo from "../assets/irdalogo.png";
import fondo from "../assets/Fondostech-Logo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="mt-20 xl:mt-28 bg-secondary text-primary px-6 md:px-12 xl:px-24 py-8 ">
      <div className="grid md:grid-cols-2 xl:grid-cols-6 md:gap-y-5 xl:gap-x-20">
        <div className="followUs flex items-center gap-6 md:col-span-2 xl:col-span-6">
          <img src={logo} alt="brand-logo" className="w-20" />
          <div className="followUs-innerContainer">
            <h3 className="text-xl font-semibold tracking-wide">Follow Us</h3>
            <ul className="flex gap-4 text-2xl mt-2">
              <li className="cursor-pointer">
                <a href="https://instagram.com" target="_blank">
                  <GrInstagram />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="https://facebook.com" target="_blank">
                  <GrFacebookOption />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="https://linkedin.com" target="_blank">
                  <GrLinkedin />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="https://x.com" target="_blank">
                  <GrTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu mt-7 md:col-span-1 xl:col-span-2">
          <h3 className="text-xl font-semibold tracking-wide">Menu</h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 text-sm mt-2 px-2">
            <div
              className="cursor-pointer hover:text-primary-darkest transition-transform duration-900"
              onClick={() => {
                navigate("/about-us");
                setActive(false);
              }}
            >
              About
            </div>
            <div
              className="cursor-pointer hover:text-primary-darkest transition-transform duration-900"
              onClick={() => {
                navigate("/contact-us");
                setActive(false);
              }}
            >
              Contact
            </div>
            <div
              className="cursor-pointer hover:text-primary-darkest transition-transform duration-900"
              onClick={() => {
                navigate("/privacy-policy");
                setActive(false);
              }}
            >
              Privacy Policy
            </div>
            <div
              className="cursor-pointer hover:text-primary-darkest transition-transform duration-900"
              onClick={() => {
                navigate("/terms-and-conditions");
                setActive(false);
              }}
            >
              Terms and Condition
            </div>
            <div
              className="cursor-pointer hover:text-primary-darkest transition-transform duration-900"
              onClick={() => {
                navigate("/disclaimer");
                setActive(false);
              }}
            >
              Disclaimer
            </div>
            <div
              className="cursor-pointer hover:text-primary-darkest transition-transform duration-900"
              onClick={() => {
                navigate("/terms-of-use");
                setActive(false);
              }}
            >
              Terms of Use
            </div>
          </div>
        </div>
        <div className="contact mt-7 md:col-span-1 xl:col-span-2">
          <h3 className="text-xl font-semibold tracking-wide">Contact</h3>
          <ul className="flex flex-col gap-3 text-2xl mt-2 px-2">
            <li>
              <p className="text-sm opacity-80 tracking-wide">
                <span className="font-semibold">Registered Office:</span> B-101,
                Riddhi Siddhi Complex, M.G. Road, Borivali (East)-400066
              </p>
            </li>
            <li>
              <p className="text-sm opacity-80 tracking-wide">
                <span className="font-semibold">Corporate Office:</span> 302
                Cosmos Mary Park, , Kolbad Cross Lane, Thane, Maharashtra 400601
              </p>
            </li>
            <li>
              <p className="text-sm opacity-80 tracking-wide cursor-pointer">
                <span className="font-semibold">Email:</span>{" "}
                <span className="cursor-pointer hover:text-primary-darkest">
                  customercare@lordsmark.com
                </span>
              </p>
            </li>
            <li>
              <p className="text-sm opacity-80 tracking-wide cursor-pointer">
                <span className="font-semibold">Phone :</span>{" "}
                <span className="cursor-pointer hover:text-primary-darkest">
                  +91 8104988600/02
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="licensedby mt-7 md:col-span-2 xl:col-span-2">
          <h3 className="text-xl font-semibold tracking-wide">Licensed By</h3>
          <div className="flex items-center justify-between gap-3 mt-2 px-2">
            <img src={irdaLogo} alt="IRDAI" />
            <div className="flex items-center gap-2 text-lg">
              Powered By:
              <img src={fondo} alt="FONDO" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 xl:mt-14 text-justify flex flex-col gap-2 opacity-80 text-xs">
        <p>
          Lords Mark Insurance Broking Services Pvt.Ltd. We are registered under
          companies act 2013 on 15th Dec. 2021 and has been licensed by IRDAI.
          LMIBS is the subsidiary of Lords Mark group CIN Number -
          U66010MH2021PTC373385, IRDAI/DB973/2022
        </p>
        <p>
          © Copyright 2024 All Rights Reserved by Lords Mark Insurance Broking
          Services Pvt.Ltd.
        </p>
      </div>
    </div>
  );
}

export default Footer;
