import React from "react";
import ReasonComponent from "./ReasonComponent";
import EmployeeSlider from "./EmployeeSlider";
import vision from "../assets/cutting-edge-sol.png";
import mission from "../assets/policies-issued.png";
import value from "../assets/claim-settlement-rate.png";

function AboutPage() {
  return (
    <div className="text-secondary-lighter">
      <div className="mainSection relative">
        <div className="imgbox h-[90vh]">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="contentBox absolute bottom-0 text-primary px-6 md:px-12 xl:px-24">
          <div className="textBox py-14 md:py-24 md:w-2/3">
            <h3 className="text-xs xs:mb-2 xl:text-base mb-1 xl:mb-2 opacity-60 tracking-wide lowercase">
              About Us
            </h3>
            <h1 className="text-3xl xs:text-4xl xl:text-[4.5rem] xl:leading-[3.7rem] mb-3 xs:mb-4 capitalize">
              Discover Our <br /> Commitment{" "}
            </h1>
            <h2 className="text-lg xl:text-2xl opacity-70 tracking-wide leading-5">
              Learn more about our journey, values, and dedication to providing
              exceptional insurance solutions.
            </h2>
          </div>
        </div>
      </div>

      <div className="boutusContainer mt-16 xl:mt-24 xl:px-24 px-6 md:px-12">
        <div className="heading mb-7 xl:mb-10">
          <h4 className="text-sm xl:text-base opacity-60">
            About Lords Mark Insurance Broking services
          </h4>
          <h2 className="text-2xl xl:text-3xl tracking-wide">
            Your Trusted Insurance Partner
          </h2>
        </div>
        <div className="data opacity-90">
          <p className="text-lg xl:text-3xl xl:leading-10 tracking-wide opacity-95 md:w-2/3">
            Lords Mark Insurance Broking Services is dedicated to offering
            comprehensive and innovative insurance solutions tailored to your
            unique needs. With years of experience and a customer-centric
            approach, we strive to provide peace of mind through reliable and
            trustworthy services. Our commitment to excellence has earned us a
            reputation as a leading insurance provider in the industry.
          </p>
          <p className="hidden xl:inline-block text-lg xl:text-3xl xl:leading-10 tracking-wide opacity-95 md:w-2/3">
            Lords Mark Insurance Broking Services is dedicated to offering
            comprehensive and innovative insurance solutions tailored to your
            unique needs. With years of experience and a customer-centric
            approach, we strive to provide peace of mind through reliable and
            trustworthy services. Our commitment to excellence has earned us a
            reputation as a leading insurance provider in the industry.
          </p>
        </div>
      </div>

      <div className="missionContainer mt-16 xl:mt-24 xl:px-24 px-6 md:px-12">
        <div className="heading mb-7 xl:mb-10">
          <h4 className="text-sm xl:text-base opacity-60">
            Our Mission, Vision, Value that drive us
          </h4>
          <h2 className="text-2xl xl:text-3xl tracking-wide">
            Our Guiding Principles
          </h2>
        </div>
        <div className="reasonHolder text-center grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-4 mb-10 md:mb-14">
          <ReasonComponent
            img={mission}
            title={"Mission"}
            subTitle={"जन जन बीमा, हर घर बीमा "}
          />
          <ReasonComponent
            img={vision}
            title={"Vision"}
            subTitle={"To increase the trust & insurance penetration"}
          />
          <ReasonComponent
            img={value}
            title={"Value"}
            subTitle={
              "Integrity, customer focus, continuous improvement to every decision we make."
            }
            className={"col-span-2"}
          />
        </div>
      </div>

      <div className="employeeContainer mt-16 xl:mt-24 pb-5">
        <div className="heading mb-7 xl:mb-10 xl:px-24 px-6 md:px-12">
          <h4 className="text-sm xl:text-base opacity-60">Meet Our Experts</h4>
          <h2 className="text-2xl xl:text-3xl tracking-wide">
            The Dedicated Professionals Behind Our Success
          </h2>
        </div>
        <EmployeeSlider />
      </div>
    </div>
  );
}

export default AboutPage;
