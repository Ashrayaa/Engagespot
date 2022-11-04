import React from "react";

type Props = {};

export default function PricingIntro({}: Props) {
  return (
    <div className="flex flex-col rounded-xl lg:rounded-none p-10 lg:py-80 gap-8 lg:p-44 lg:gap-6 mt-10 lg:pt-16 justify-center items-center text-white bg-gradient-to-r from-spotpurple to-engagepurple">
      <h1 className="font-semibold xl:px-52 2xl:px-80 text-center leading-10 text-3xl">
        Simple Pricing
      </h1>
      <p className="lg:text-sm text-center text-xs 2xl:px-32 xl:px-24 lg:px-28">
        Building a sophisticated transactional notification system in your
        product needs lot of engineering effort. Why build from scratch when you
        can just buy and use it from day one?
      </p>
      <div className="flex flex-col md:flex-row md:gap-8 gap-6  justify-center items-center">
        <button className="text-engagepurple bg-white rounded-lg py-2 px-4 cursor-pointer font-semibold">Try for free</button>
        <p>Question? Talk to an expert</p>
      </div>
      <div className="hidden">
      <button className="text-spotpurple font-semibold bg-white rounded-3xl px-4 p-2">Monthly</button>
      <button className="text-white border border-white px-24 py-3  font-semibold rounded-3xl ">Annually</button>
      </div>
     
    </div>
  );
}
