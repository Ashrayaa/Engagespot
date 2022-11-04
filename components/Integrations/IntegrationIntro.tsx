import React from "react";

type Props = {};

export default function IntegrationIntro({}: Props) {
  return (
    <div className="flex flex-col rounded-xl lg:rounded-none p-10 gap-8 lg:p-44 lg:gap-8 mt-10 justify-center items-center text-white bg-gradient-to-r from-spotpurple to-engagepurple mx-4 lg:mx-0 ">
      <h1 className="font-semibold text-center leading-10 text-3xl lg:text-4xl lg:leading-normal xl:text-5xl xl:leading-normal 2xl:text-7xl 2xl:leading-normal">Integrate with your favourite providers</h1>
      <p className="lg:text-sm text-center text-xs xl:text-xl 2xl:text-2xl">Without writing a single line of code</p>
    </div>
  );
}
