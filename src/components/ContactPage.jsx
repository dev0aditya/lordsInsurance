import React from "react";
import reasonOne from "../assets/industry-expertise.png";
import reasonTwo from "../assets/claim-settlement-rate.png";
import reasonThree from "../assets/commited-advisor.png";
import reasonFour from "../assets/centered-service.png";
import ReasonComponent from "./ReasonComponent";

function ContactPage() {
  return (
    <div className="mt-16 xl:mt-16 xl:px-24 px-6 md:px-12">
      {/* Heading Section */}
      <div className="heading mb-10 xl:mb-10 xl:flex xl:gap-12">
        <img
          src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact Us"
          className="rounded-xl w-full h-[40vh] xl:h-[60vh] xl:w-3/5 object-cover brightness-50"
        />
        <div className="xl:w-2/5">
          <h4 className="text-sm mt-6 xl:mt-16 xl:text-base opacity-60">
            CONTACT US
          </h4>
          <h2 className="text-2xl xl:text-[2.8rem] xl:leading-[2.8rem] tracking-wide">
            Contact Us For Insurance Solutions
          </h2>
          <p className="text-base opacity-70">
            Whether you have questions, need assistance, or want to learn more
            about our services, we're here to help you with all your insurance
            needs.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="reasonHolder grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-4 mb-10 md:mb-14">
        <ReasonComponent
          className={"text-center"}
          img={reasonOne}
          title={"Corporate Office"}
          subTitle={"302, Cosmos Mary Park, Thane West, Thane"}
        />
        <ReasonComponent
          className={"text-center"}
          img={reasonTwo}
          title={"Head Office"}
          subTitle={"Riddhi Siddhi Complex, Borivali (East)"}
        />
        <ReasonComponent
          className={"text-center"}
          img={reasonThree}
          title={"Phone Number"}
          subTitle={"+91 8104988600/02"}
        />
        <ReasonComponent
          className={"text-center"}
          img={reasonFour}
          title={"Email Address"}
          subTitle={"customercare@lordsmark.co"}
        />
      </div>

      {/* Form Section */}
      <div className="formContainer pt-20 pb-10">
        <h2 className="text-3xl font-semibold xl:text-4xl 2xl:text-[3.5rem] tracking-wide">
          Still Have a Question?
        </h2>
        <p className="leading-5 mt-1 opacity-75 xl:mt-2 xl:w-3/5">
          If you need further assistance, don't hesitate to contact us. Our
          dedicated team is ready to help you with any queries or concerns.
        </p>
        <div className="xl:flex xl:h-[50vh]">
          <div className="leftContainer brightness-75 mt-10  xl:w-2/3 xl:mt-8 xl:px-6 2xl:px-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.817164516257!2d72.97177601192695!3d19.203186481952777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93c1bd88d07%3A0x70426ae6f0ea3176!2sCosmos%20Mary%20Park!5e0!3m2!1sen!2sin!4v1732014223768!5m2!1sen!2sin"
              width="600"
              height="600"
              className="w-full h-full min-h-80 rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="rightContainerClaim xl:w-2/3 xl:pl-20">
            <form action="" className="mt-8">
              <div className="details grid grid-cols-2 py-4 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="col-span-2 md:col-span-1 border border-gray-300 rounded-lg p-2"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="col-span-2 md:col-span-1 border border-gray-300 rounded-lg p-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="col-span-2 md:col-span-2 border border-gray-300 rounded-lg p-2"
                />

                <textarea
                  name="Message"
                  placeholder="Message"
                  className="col-span-2 border border-gray-300 rounded-lg p-2"
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
    </div>
  );
}

export default ContactPage;
