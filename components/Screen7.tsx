import React from "react";

type Props = {};

export default function Screen7({}: Props) {
  return (
    <div className="flex flex-col gap-6 p-8 mt-10 text-white bg-gradient-to-r from-spotpurple to-engagepurple">
      <h1 className="font-semibold text-xl md:text-2xl text-center xl:text-3xl">
        A complete notifications system, setup in minutes
      </h1>
      <p className="font-medium text-center text-sm md:text-lg xl:text-xl xl:px-20">
        Get a complete product notification system that includes batching,
        cross-channel delivery, and preference management all within a few
        minutes. 10k notifications included per month for free.
      </p>
      <button className="bg-white hover:text-white hover:bg-engagepurple hover:border-engagepurple text-engagepurple hover:transition-all hover:duration-200 hover:ease-in-out hover:transform hover:translate-y-0 sm:w-[40%] lg:w-[30%] sm:ml-36 md:ml-44 lg:ml-72 xl:ml-[38%] xl:w-[20%] p-4 border rounded-xl font-semibold">
        Get Started for free
      </button>

    </div>
  );
}
