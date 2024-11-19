import React from "react";
import reasonOne from "../assets/industry-expertise.png";
import reasonTwo from "../assets/claim-settlement-rate.png";
import reasonThree from "../assets/commited-advisor.png";
import reasonFour from "../assets/centered-service.png";
import ReasonComponent from "./ReasonComponent";

function ClaimPage() {
  return (
    <div className="mt-16 xl:mt-16 xl:px-24 px-6 md:px-12">
      <div className="heading mb-10 xl:mb-10 xl:flex xl:gap-12">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="claim insurance"
          className="rounded-xl w-full h-[40vh] xl:h-[60vh] xl:w-3/5 object-cover brightness-90"
        />
        <div className="xl:w-2/5">
          <h4 className="text-sm mt-6 xl:mt-16 xl:text-base opacity-60">
            CLAIMS
          </h4>
          <h2 className="text-2xl xl:text-[2.8rem] xl:leading-[2.8rem] tracking-wide">
            Hassle-Free Claims Process
          </h2>
          <h2 className="text-base opacity-70 ">
            At Lords Mark Insurance Broking Services, we ensure a
            straightforward and stress-free claims process, so you can focus on
            what matters most.
          </h2>
        </div>
      </div>
      <div className="reasonHolder grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-4 mb-10 md:mb-14">
        <ReasonComponent img={reasonOne} title={"24/7 "} subTitle={"Support"} />
        <ReasonComponent
          img={reasonTwo}
          title={"Quick"}
          subTitle={"Resolution"}
        />
        <ReasonComponent
          img={reasonThree}
          title={"Phone Number"}
          subTitle={"+91 8104988600/02"}
        />
        <ReasonComponent
          img={reasonFour}
          title={"Faster"}
          subTitle={"Settlement"}
        />
      </div>
      <div className="formContainer pt-20 pb-10 xl:flex xl:gap-10 ">
        <div className="leftContainer xl:w-1/3 xl:mt-8 xl:px-6 2xl:px-0">
          <h2 className="text-3xl font-semibold xl:text-4xl 2xl:text-[3.5rem] tracking-wide">
            Register Your Claim!
          </h2>
          <p className="leading-5 mt-1 opacity-75 2xl:mt-5 2xl:w-2/3">
            Submit your claim easily with our user-friendly form and get prompt
            assistance from our dedicated team.
          </p>
        </div>
        <div className="rightContainerClaim xl:w-2/3 xl:pl-20">
          <form action="">
            <div className="form-group has-feedback">
              <select
                className="form-control w-full shadow-md mt-4 py-2 focus:outline-none rounded-lg px-4 text-lg 2xl:text-xl opacity-70"
                name="product_code"
              >
                <option value="" selected="selected">
                  Select insurance type*
                </option>
                <option value="AGRICULTURE">AGRICULTURE</option>
                <option value="ALLRISK">ALL RISK INSURANCE</option>
                <option value="AVIATION">AVIATION INSURANCE</option>
                <option value="BAGGAGE">BAGGAGE INSURANCE</option>
                <option value="BURGLARY">BURGLARY INSURANCE</option>
                <option value="CATTLE">CATTLE INSURANCE</option>
                <option value="CREDIT">CREDIT INSURANCE</option>
                <option value="CRIME">CRIME INSURANCE</option>
                <option value="ELECTRONIC">
                  ELECTRONIC EQUIPMENT INSURANCE
                </option>
                <option value="ENGINEERING">ENGINEERING INSURANCE</option>
                <option value="FARMERPACKAGE">FARMER PACKAGE</option>
                <option value="FIDELITY">FIDELITY INSURANCE</option>
                <option value="FINEARTS">FINE ARTS INSURANCE</option>
                <option value="FIRE">FIRE INSURANCE</option>
                <option value="GMC">GMC INSURANCE</option>
                <option value="GPA">GPA INSURANCE</option>
                <option value="HEALTH">HEALTH</option>
                <option value="JEWELLERS">JEWELLERS BLOCK</option>
                <option value="LIABILITY">LIABILITY INSURANCE</option>
                <option value="LIFE">LIFE</option>
                <option value="LOSSOFPROFIT">LOSS OF PROFIT</option>
                <option value="LPGDEALERPACKAGE">
                  LPG DEALER PACKAGE INSURANCE
                </option>
                <option value="MACHINERY">MACHINERY INSURANCE</option>
                <option value="MARINE">MARINE</option>
                <option value="MILTIMODAL">
                  MILTIMODAL TRANSPORT OPERATOR
                </option>
                <option value="MISCELLANEOUS">MISCELLANEOUS</option>
                <option value="MONEY">MONEY INSURANCE</option>
                <option value="MOTOR">MOTOR</option>
                <option value="NEONSIGN">NEON SIGN</option>
                <option value="PERSONALACCIDENT">
                  PERSONAL ACCIDENT INSURANCE
                </option>
                <option value="PETDOG">PET DOG INSURANCE</option>
                <option value="PLATEGLASS">PLATE GLASS INSURANCE</option>
                <option value="SPECIALCONTINGENCY">
                  SPECIAL CONTINGENCY INSURANCE
                </option>
                <option value="TERM">TERM INSURANCE</option>
                <option value="TRADEPROTECTOR">
                  TRADE PROTECTOR INSURANCE
                </option>
                <option value="TRAVEL">TRAVEL INSURANCE</option>
                <option value="WORKMEN">WORKMEN INSURANCE</option>
              </select>
            </div>
            <div className="details grid grid-cols-2 py-4 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="col-span-2 md:col-span-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="col-span-2 md:col-span-1"
              />
              <input
                type="number"
                placeholder="Phone"
                className="col-span-2 md:col-span-1"
              />
              <input
                type="text"
                placeholder="OTP"
                className="col-span-2 md:col-span-1"
              />
              <textarea
                name="Message"
                placeholder="Message"
                className="col-span-2"
                rows={5}
              ></textarea>
            </div>
            <button className="bg-secondary-lightest/90 hover:bg-secondary-lightest text-primary w-full py-3 text-xl rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClaimPage;
