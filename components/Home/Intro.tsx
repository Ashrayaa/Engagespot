import React from "react";
import Image from "next/image";
import Displayimage from "public/displaypngcopy.png";

type Props = {};

export default function Screen1({}: Props) {
  return (
    <div className="flex flex-col sm:p-4 md:p-10 mb-10 lg:flex-row sm:mb-[15%] lg:gap-32 lg:mb-2 xl:gap-44 xl:mb-0">
      <div className="flex flex-col p-2 xl:p-0 gap-6 md:gap-10 xl:mx-10 xl:gap-12">
        <div className="text-3xl xl:text-5xl xl:leading-snug xl:font-bold font-semibold text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple sm:mt-14 mt-6 lg:text-5xl sm:text-6xl sm:justify-center sm:items-center">
          <h1>Build Notification Infrastructure for your Product</h1>
        </div>
        <div className="font-medium text-sm sm:text-lg md:text-xl text-engagepurple lg:text-sm lg:mr-8 xl:-mr-16 xl:text-lg">
          <p>
            Say goodbye to building and maintaining a notification
            micro-service. Flexible, reliable notifications infrastructure
            that&apos;s built to scale with you.
          </p>
          {/* <p> Use our APIs to engage users, power cross-channel
          workflows, and manage notification preferences.</p> */}
        </div>
        <div className="lg:flex-row sm:gap-10 flex flex-col gap-6 lg:justify-center lg:items-center">
          <input
            className="p-4 lg:text-2xl xl:py-6 xl:pr-48 sm:p-8 sm:text-3xl px-14 lg:pr-36 lg: font-semibold text-xl relative border border-engagepurple rounded-lg"
            type="textbox"
            placeholder="Enter your mail id"
          >
          </input>
          <button className="text-white p-4 lg:p-4 sm:p-8 bg-gradient-to-r from-spotpurple to-engagepurple lg:absolute font-medium rounded-lg text-lg sm:text-2xl text-center lg:ml-72 xl:ml-[25%] 2xl:ml-[19%] 3xl:ml-[15%] 4xl:ml-[12%]">
            Get Started
          </button>
        </div>

        {/* <button className="text-white absolute mt-[66%] lg:mt-[23%] lg:ml-[30%] w-40 ml-44 bg-gradient-to-r from-spotpurple to-engagepurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-engagepurple font-medium h-10 rounded-xl text-lg text-center mr-2 mb-2">
          Get Started
        </button> */}
      </div>

      <div className="sm:mt-20 lg:-ml-32 ">
        <Image src={Displayimage} alt="displayimage"/>
      </div>
    </div>
  );
}
