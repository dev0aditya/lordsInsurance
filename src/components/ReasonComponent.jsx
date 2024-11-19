import React from "react";

function ReasonComponent({ img, title, subTitle, className }) {
  return (
    <div
      className={`reason bg-primary-darker rounded-xl px-1 py-3 xl:py-10 flex flex-col items-center shadow cursor-pointer ${
        className ? className : ""
      }`}
    >
      <img
        src={img}
        alt={title}
        className="w-20 xl:w-28 object-contain opacity-90"
      />
      <h3 className="text-lg text-secondary-lightest text-center font-bold pt-3 px-2 leading-5 opacity-90">
        {title}
      </h3>
      <p className="text-sm opacity-70">{subTitle}</p>
    </div>
  );
}

export default ReasonComponent;
