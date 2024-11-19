import React from "react";

function BrandComponent({ className, img, name }) {
  return (
    <div
      className={`brandOne h-32 xl:h-44 flex justify-center items-center bg-primary-darker rounded-xl brightness-[0.9] px-5 shadow relative overflow-hidden group ${
        className ? className : ""
      }`}
    >
      <span className="absolute text-secondary-lightest text-2xl xl:text-3xl tracking-wider font-light opacity-95 bg-primary-darker w-full h-full flex justify-center items-center transition-opacity duration-300 group-hover:opacity-0">
        {name}
      </span>
      <img
        src={img}
        alt={name}
        className="w-full opacity-100 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
}

export default BrandComponent;
