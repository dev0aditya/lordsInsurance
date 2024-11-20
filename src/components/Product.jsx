import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

function Product({ img, header, desc, discount }) {
  return (
    <div className="product-card group relative cursor-pointer">
      <div className="imgbox flex justify-center items-center relative rounded-xl">
        <img
          src={img}
          alt={header + " img"}
          className="w-full rounded-xl brightness-[0.8]"
        />
        <div className="overlayText absolute right-0 top-0 p-2 flex items-center gap-2">
          <div className="off bg-primary px-2 py-1 rounded-lg text-primary-darkest font-bold">
            {discount}% Off
          </div>
          <div className="redirect bg-primary w-9 h-9 flex justify-center items-center rounded-full text-xl transition-transform duration-300 group-hover:rotate-[-45deg]">
            <BsArrowRightCircleFill className="group-hover:scale-125 transition-transform duration-300 text-primary-darkest" />
          </div>
        </div>
      </div>
      <div className="textbox mt-2 xl:mt-3 px-2">
        <h5 className="text-xl xl:text-2xl font-bold tracking-wide">
          {header}
        </h5>
        <p className="text-xs xl:text-sm opacity-70 tracking-wide">{desc}</p>
      </div>
    </div>
  );
}

export default Product;
