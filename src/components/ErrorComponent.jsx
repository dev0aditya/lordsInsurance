import React from "react";
import { IoSkull } from "react-icons/io5";

function ErrorComponent() {
  return (
    <div className="flex justify-center items-center h-screen px-6">
      <div className="component flex gap-10 items-center flex-col">
        <div className="img text-[10rem]">
          <IoSkull />
        </div>
        <div className="data text-4xl text-center">
          Wrong URL entered please check it again!!
        </div>
      </div>
    </div>
  );
}

export default ErrorComponent;
