import React from "react";

type Props = {};

export default function IntegrationIntro({}: Props) {
  return (
    <div className="flex flex-col rounded-xl lg:rounded-none p-10 mx-4 gap-8 lg:p-44 lg:gap-8 mt-10 justify-center items-center text-white bg-gradient-to-r from-spotpurple to-engagepurple ">
      <h1 className="font-semibold xl:px-52 2xl:px-80 text-center leading-10 text-3xl">Integrate with your favourite providers</h1>
      <p className="lg:text-sm text-center text-xs">Without Writing a single line of code</p>
    </div>
  );
}
