import React from "react";
import Image from "next/image";
import Displayimage from "public/displayimage.svg";

type Props = {};

export default function Screen1({}: Props) {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-4 lg:flex-row lg:gap-32">
      <div className="flex flex-col gap-6 lg:flex lg:flex-col lg:w-[50%] lg:gap-18 lg:p-16">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple  mt-6 lg:text-6xl">
          Build Notification Infrastructure for your Product
        </h1>
        <p className="font-medium text-engagepurple">
          Say goodbye to building and maintaining a notification micro-service.
          Flexible, reliable notifications infrastructure that &apos s built to
          scale with you. Use our APIs to engage users, power cross-channel
          workflows, and manage notification preferences.
        </p>
        <input
          className="p-4 px-8 font-semibold text-xl ml-1 relative border border-engagepurple"
          type="textbox"
          placeholder="Enter your mail id"
        ></input>
        <button className="text-white p-4 w-[100%] lg:mt-[23%] lg:ml-[30%] bg-gradient-to-r from-spotpurple to-engagepurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-engagepurple font-semibold rounded-lg text-lg text-center">
          Get Started
        </button>
        {/* <button className="text-white absolute mt-[66%] lg:mt-[23%] lg:ml-[30%] w-40 ml-44 bg-gradient-to-r from-spotpurple to-engagepurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-engagepurple font-medium h-10 rounded-xl text-lg text-center mr-2 mb-2">
          Get Started
        </button> */}
      </div>

      <div>
        <Image src={Displayimage} alt="displayimage" />
      </div>
    </div>
  );
}
