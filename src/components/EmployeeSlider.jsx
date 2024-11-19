import React from "react";
import Slider from "react-slick";
import firstEmployee from "../assets/employee/S.K.jpg";
import secondEmployee from "../assets/employee/Parag.jpg";
import thirdEmployee from "../assets/employee/Sumit.jpg";
import fourthEmployee from "../assets/employee/Rutuja.jpg";
import fifthEmployee from "../assets/employee/Monica.jpg";
import sixthEmployee from "../assets/employee/Priya.jpg";
import seventhEmployee from "../assets/employee/Aniket.jpg";
import eighthEmployee from "../assets/employee/Tanvi.jpg";
import ninthEmployee from "../assets/employee/Yusuf.jpg";
import tenthEmployee from "../assets/employee/Jay.jpg";
import eleventhEmployee from "../assets/employee/Sachidanand.jpg";
import twelvethEmployee from "../assets/employee/Vinay.jpg";

const employees = [
  {
    name: "Mr. S. K Raghav",
    img: firstEmployee,
    designation: "Managing Director & Principal officer",
  },
  {
    name: "Mr. Parag Khot",
    img: secondEmployee,
    designation: "Accounts Manager",
  },
  {
    name: "Mr. Sumit Sartape",
    img: thirdEmployee,
    designation: "Sr. HR & Admin",
  },
  {
    name: "Ms. Rutuja Shinde",
    img: fourthEmployee,
    designation: "MIS & Claim Support",
  },
  {
    name: "Ms. Monica Pandey",
    img: fifthEmployee,
    designation: "GTL & Life",
  },
  {
    name: "Ms. Priya Singh",
    img: sixthEmployee,
    designation: "IT Manager",
  },
  {
    name: "Aniket Kank",
    img: seventhEmployee,
    designation: "Quotation Executive",
  },
  {
    name: "Tanvi Shetye",
    img: eighthEmployee,
    designation: "Motors",
  },
  {
    name: "Yusuf Patel",
    img: ninthEmployee,
    designation: "GMC & GPA",
  },
  {
    name: "Jay Prajapati",
    img: tenthEmployee,
    designation: "Graphic designer",
  },
  {
    name: "Dr. Sachidanand Upadhyay",
    img: eleventhEmployee,
    designation: "Promoter Director",
  },
  {
    name: "Mr. Vinay Sarda",
    img: twelvethEmployee,
    designation: "Director",
  },
];

function EmployeeSlider() {
  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    arrows: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="employee-slider px-5 xl:px-10 cursor-grab">
      <Slider {...settings}>
        {employees.map((employee, index) => (
          <div key={index} className="employee-card pl-5 relative">
            <div className="employee-img-box rounded-xl shadow-md">
              <img
                src={employee.img}
                alt={employee.name}
                className=" object-cover brightness-[0.65] h-[25rem] xl:h-[30rem] rounded-xl"
              />
            </div>
            <h3 className="text-xl xl:text-2xl font-semibold tracking-wide mt-4 absolute bottom-0 text-primary-darker left-0 ml-8 xl:ml-12 xl:py-6 py-5">
              <p>{employee.name}</p>
              <p className="text-sm xl:text-base brightness-90 font-bold tracking-wide">
                {employee.designation}
              </p>
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default EmployeeSlider;
