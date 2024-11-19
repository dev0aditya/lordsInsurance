import React from "react";
import loader from "../assets/Blinking-squares.gif";

function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-[60vh] px-6">
      <img src={loader} alt="" />
    </div>
  );
}

export default LoadingPage;
