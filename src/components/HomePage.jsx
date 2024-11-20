import React, { useEffect } from "react";
import Product from "./Product";
import reasonOne from "../assets/industry-expertise.png";
import reasonTwo from "../assets/policy-range.png";
import reasonThree from "../assets/centered-service.png";
import reasonFour from "../assets/cutting-edge-sol.png";
import ReasonComponent from "./ReasonComponent";
import reasonFive from "../assets/policies-issued.png";
import reasonSix from "../assets/satisfied-customer.png";
import reasonSeven from "../assets/commited-advisor.png";
import reasonEight from "../assets/claim-settlement-rate.png";
import relianceLogo from "../assets/reliance.png";
import bajajLogo from "../assets/bajaj-allianz.png";
import careLogo from "../assets/care.png";
import cholaLogo from "../assets/chola.png";
import digitLogo from "../assets/digit.png";
import hdfcLogo from "../assets/hdfc.png";
import iciciLombard from "../assets/icici-lombard.png";
import nivaLogo from "../assets/niva.png";
import tataLogo from "../assets/tata-aig.png";
import BrandComponent from "./BrandComponent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.fromTo(
      "h1",
      { y: "100%", opacity: 0 },
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: "0%",
        opacity: 1,
        duration: 2.2,
      }
    )
      .fromTo(
        ".title-desc",
        { y: "100%", opacity: 0 },
        {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          y: "0%",
          opacity: 1,
        },
        "-=1.7"
      )
      .fromTo(
        ".title-small-desc",
        { y: "100%", opacity: 0 },
        {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          y: "0%",
          opacity: 1,
        },
        "-=1.9"
      )
      .to(".banner-img", { opacity: 1 }, "-=2");

    gsap.fromTo(
      ".ContainerTitle",
      { y: "100%", opacity: 0 },
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: "0%",
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      ".ContainerSubTitle",
      { y: "100%", opacity: 0 },
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: "0%",
        opacity: 1,
        duration: 1.6,
        ease: "power4.in",
        scrollTrigger: {
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      ".product-card",
      { y: "100%" },
      {
        y: "0%",
        duration: 1.6,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".products",
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      ".reason",
      { opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power4.in",
        scrollTrigger: {
          trigger: ".reasonHolder1",
          scrub: false,
        },
      }
    );
  }, []);
  return (
    <div className="text-secondary-lighter">
      <div className="HeroContainer pt-5 px-6 md:px-12 xl:px-24">
        <div className="textBox py-6">
          <h3 className="title-small-desc text-xs xs:mb-2 xl:text-sm mb-1 xl:mb-0 opacity-60 tracking-wide lowercase">
            Welcome to Lords Mark Insurance Broking Services
          </h3>
          <h1 className="text-3xl xs:text-4xl xl:text-[3.5rem] xl:leading-[3.7rem] mb-3 xs:mb-4 capitalize">
            Your Trusted Partner <br /> in Insurance{" "}
          </h1>
          <h2 className="title-desc text-lg opacity-70 tracking-wide">
            Explore a Range of Insurance Solutions Tailored for You.
          </h2>
        </div>
        <div className="imgBox mt-3 xs:mt-6">
          <div className="imgContainer h-64 xs:h-72 md:h-[25rem] xl:h-[30rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="banner-img"
              className="banner-img object-cover opacity-0 h-full w-full rounded-xl xl:object-center"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="contactUs flex mt-16 xs:mt-20 xl:mt-24 shadow-lg h-16 justify-between xl:w-1/2">
            <input
              type="text"
              className="bg-white px-4 text-xl w-9/12 focus:outline-none"
              placeholder="Talk to us!!"
            />
            <button className="w-3/12 bg-secondary-lightest/90 hover:bg-secondary-lightest text-primary">
              Send <span className="hidden md:inline">mail</span>
            </button>
          </div>
        </div>
      </div>
      <div className="productContainer mt-20 xl:mt-24 xl:px-24 px-6 md:px-12">
        <div className="heading mb-7 xl:mb-10">
          <h4 className="ContainerSubTitle text-sm xl:text-base opacity-60">
            Flexible Policies to fit unique need
          </h4>
          <h2 className="ContainerTitle text-2xl xl:text-3xl tracking-wide">
            Our Insurance Products
          </h2>
        </div>
        <div className="products overflow-hidden grid gap-6 xs:gap-8 md:grid-cols-2 xl:grid-cols-4 md:gap-x-3">
          <Product
            img={
              "https://plus.unsplash.com/premium_photo-1675808577247-2281dc17147a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            header={"Health Insurance"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam?"
            }
            discount={10}
          />
          <Product
            img={
              "https://plus.unsplash.com/premium_photo-1661776035013-6e8fe680c0d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            header={"Car Insurance"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam?"
            }
            discount={10}
          />
          <Product
            img={
              "https://plus.unsplash.com/premium_photo-1682430406522-f69e62f7ddb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            header={"Bike Insurance"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam?"
            }
            discount={10}
          />
          <Product
            img={
              "https://plus.unsplash.com/premium_photo-1684407617236-9baf926474ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            header={"Travel Insurance"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam?"
            }
            discount={10}
          />
        </div>
      </div>
      <div className="reasonContainer mt-20 px-6 md:px-12 xl:px-24">
        <div className="heading mb-7 xl:mb-10">
          <h2 className="text-2xl tracking-wide text-center xl:text-3xl">
            Why{" "}
            <span className="font-bold text-secondary-lighter">
              Lords Mark Insurance
            </span>{" "}
            Broking Services?
          </h2>
        </div>
        <div className="reasonHolder1 overflow-hidden grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-4 mb-10 md:mb-14">
          <ReasonComponent img={reasonOne} title={"Industry Expertise "} />
          <ReasonComponent
            img={reasonTwo}
            title={"Comprehensive Policy Range"}
          />
          <ReasonComponent
            img={reasonThree}
            title={"Client-Centered Service"}
          />
          <ReasonComponent img={reasonFour} title={"Cutting-Edge Solutions"} />
        </div>
        <div className="heading mb-10 md:mb-14 text-center opacity-75">
          <h2 className="text-lg xl:text-xl leading-5 font-semibold tracking-wide mb-1 xl:mb-0">
            Trusted by Thousands <br /> Committed to Excellence
          </h2>
          <p className="text-xs xl:text-base tracking-wider">
            Discover why countless clients trust us.
          </p>
        </div>
        <div className="reasonHolder2 overflow-hidden grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-4 mb-7">
          <ReasonComponent
            img={reasonFive}
            title={"10000+"}
            subTitle={"Policies Issued"}
          />
          <ReasonComponent
            img={reasonSix}
            title={"8000+"}
            subTitle={"Satisfied Customers"}
          />
          <ReasonComponent
            img={reasonSeven}
            title={"1000+"}
            subTitle={"Committed Advisor"}
          />
          <ReasonComponent
            img={reasonEight}
            title={"99%"}
            subTitle={"Claim Settlement Rate"}
          />
        </div>
      </div>
      <div className="joinUsContainer mt-20 pt-10 xs:pt-14 xl:pt-8 px-6 md:px-12 xl:px-24 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-right opacity-70"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-secondary-lighter/100 via-secondary-lightest/90 to-secondary-lightest/75"></div>

        <div className="relative z-10">
          <div className="heading mb-7 xl:mb-10">
            <h4 className="text-sm xl:text-base opacity-60">
              Join Us as a PoSP
            </h4>
            <h2 className="text-2xl xl:text-3xl tracking-wide">
              Empower Your Career with Lords Mark Insurance Broking Services?
            </h2>
          </div>
          <div className="content md:w-4/5 xl:w-4/6 2xl:w-4/6 text-lg xl:text-2xl xl:leading-6 tracking-wider opacity-95 flex flex-col gap-4 xl:gap-3">
            <div className="lines leading-6 xl:leading-7 font-bold">
              Self Managed hours :{" "}
              <span className="font-light ">
                Enjoy the freedom to work at your convenience.{" "}
                <span className="hidden xl:inline">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  possimus et
                </span>
              </span>{" "}
              Customized solutions :{" "}
              <span className="font-light">
                We offer tailored insurance solutions to meet specific needs and
                requirements.
                <span className="hidden xl:inline">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  possimus et
                </span>
              </span>{" "}
              Competitive prices :{" "}
              <span className="font-light">
                We provide competitive pricing for their insurance products.
                <span className="hidden xl:inline">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  possimus et
                </span>
              </span>{" "}
              Claims assistance :{" "}
              <span className="font-light">
                We assist with claims processing and ensure that clients receive
                fair settlements.
                <span className="hidden xl:inline">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  possimus et
                </span>
              </span>{" "}
              Risk management expertise :{" "}
              <span className="font-light">
                We offer risk management advice and support to help clients
                mitigate potential risks.
                <span className="hidden xl:inline">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  possimus et
                </span>
              </span>
            </div>
          </div>
          <div className="JoinUsBtn pt-10 pb-12 flex justify-center xs:pb-10">
            <button className="bg-primary/95 text-secondary px-8 xl:px-24 py-2 rounded-xl text-xl xl:text-2xl tracking-wide font-bold text-opacity-80 cursor-pointer hover:shadow-2xl">
              Join Us
            </button>
          </div>
        </div>
      </div>

      <div className="partnerContainer mt-16 px-6 md:px-12 xl:px-24">
        <div className="heading mb-7 xl:mb-10">
          <h2 className="text-2xl tracking-wide xl:text-3xl">Our Partners</h2>
          <h4 className="text-sm xl:text-base opacity-60">
            Collaborating with industry leaders to provide superior insurance
            services.
          </h4>
        </div>
        <div className="brandsContainer grid grid-cols-6 gap-2 xl:gap-x-4 xl:gap-y-3">
          <BrandComponent
            img={bajajLogo}
            name="bajajLogo"
            className="hidden xl:inline-block col-span-4 xl:col-span-1"
          />
          <BrandComponent
            img={digitLogo}
            name="digitLogo"
            className="hidden xl:inline-block col-span-2 xl:col-span-1"
          />
          <BrandComponent
            img={relianceLogo}
            name="Reliance"
            className="col-span-6 md:col-span-2 xl:col-span-1"
          />
          <BrandComponent
            img={hdfcLogo}
            name="HDFC"
            className="col-span-3 md:col-span-2 xl:col-span-3"
          />
          <BrandComponent
            img={careLogo}
            name="Care"
            className="col-span-3 md:col-span-2"
          />
          <BrandComponent
            img={cholaLogo}
            name="Chola MS"
            className="col-span-6 xl:col-span-4"
          />
          <BrandComponent
            img={iciciLombard}
            name="ICICI Lombard"
            className="col-span-6 md:col-span-2 xl:col-span-2"
          />
          <BrandComponent
            img={nivaLogo}
            name="Niva"
            className="col-span-3 md:col-span-2 xl:col-span-2"
          />
          <BrandComponent
            img={tataLogo}
            name="Tata AIG"
            className="col-span-3 md:col-span-2"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
