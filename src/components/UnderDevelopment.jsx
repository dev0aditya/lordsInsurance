import React from "react";
import { LuConstruction } from "react-icons/lu";

function UnderDevelopment() {
  return (
    <div className="flex justify-center items-center h-[70vh] px-6">
      <div className="component flex gap-10 items-center flex-col">
        <div className="img text-[10rem] text-red-900">
          <LuConstruction />
        </div>
        <div className="data text-4xl text-center text-red-900">
          This Page is under Development
        </div>
      </div>
    </div>
  );
}

export default UnderDevelopment;
