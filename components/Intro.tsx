import React from "react";
import Image from "next/image";
import Displayimage from "public/displayimage.svg";

type Props = {};

export default function Screen1({}: Props) {
  return (
    <div className="flex flex-col gap-10 mb-10 mt-8 lg:mt-0 lg:p-4 lg:flex-row lg:gap-32 lg:w-[95%] sm:mb-[15%]">
      <div className="flex flex-col gap-6 lg:flex lg:flex-col lg:gap-18 lg:p-16">
        <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple sm:mt-14 mt-6 lg:text-6xl lg:flex lg:flex-col lg:gap-3">
          <h1>Build Notification </h1>
          <h1>Infrastructure for </h1>
          <h1>your Product</h1>
        </div>
        <div className="font-medium text-engagepurple lg:flex lg:flex-col lg:text-lg">
          <p>Say goodbye to building and maintaining a notification</p>
          <p>micro-service. Flexible, reliable notifications infrastructure</p>
          <p>that&apos;s built to scale with you.</p>
          {/* <p> Use our APIs to engage users, power cross-channel
          workflows, and manage notification preferences.</p> */}
        </div>
        <div className="sm:flex sm:flex-row sm:gap-10 flex flex-col gap-6">
          <input
            className="p-2 px-14 font-semibold text-xl sm:ml-0 relative border border-engagepurple rounded-lg"
            type="textbox"
            placeholder="Enter your mail id"
          ></input>
          <button className="text-white p-4 bg-gradient-to-r from-spotpurple to-engagepurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-engagepurple font-semibold rounded-lg text-lg text-center">
            Get Started
          </button>
        </div>

        {/* <button className="text-white absolute mt-[66%] lg:mt-[23%] lg:ml-[30%] w-40 ml-44 bg-gradient-to-r from-spotpurple to-engagepurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-engagepurple font-medium h-10 rounded-xl text-lg text-center mr-2 mb-2">
          Get Started
        </button> */}
      </div>

      <div className="sm:mt-20">
        <Image src={Displayimage} alt="displayimage" />
      </div>
    </div>
  );
}
