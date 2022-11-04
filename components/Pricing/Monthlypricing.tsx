import React from "react";
import Image from "next/image";
import Tick from "/public/tick.svg";
import Arrow from "/public/arrow.svg";

type Props = {};

export default function Monthlypricing({}: Props) {
  return (
    <div className="lg:flex lg:gap-8 xl:gap-24 xl:px-24 2xl:gap-32 2xl:px-52 lg:px-10 lg:-mt-64 lg:mb-24 px-6">
      {/* First Card */}
      <div className="flex flex-col gap-6 bg-white mt-10 p-2 xl:p-10 border rounded-xl shadow-md py-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl font-semibold text-spotpurple">Free</h1>
          <h2 className="text-3xl font-semibold text-spotpurple">
            $0{" "}
            <span className="font-medium text-lg text-engagepurple">
              /month
            </span>
          </h2>
          <div className="w-[95%] h-0.5 bg-gray-300"></div>
          <p className="font-semibold text-engagepurple">
            Upto 10,000 workflows / month
          </p>

          <ul className="flex flex-col gap-4 p-4 text-xs font-medium">
            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Unlimited templates
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Access to all channels
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Premium integrations not available
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Shared infrastructure
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Branding
            </li>
          </ul>

          <button className="inline-flex mb-4 items-center border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] px-4 py-2 text-lg font-medium rounded-[10px] font-poppins text-white hover:bg-gray-700">
            Try for free
          </button>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex xl:p-10 lg:bg-white flex-col gap-6 mt-10 p-2 border rounded-xl shadow-md py-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl font-semibold text-spotpurple">Growth</h1>
          <h2 className="text-3xl font-semibold text-spotpurple">
            $89{" "}
            <span className="font-medium text-lg text-engagepurple">
              /month
            </span>
          </h2>
          <div className="w-[95%] h-0.5 bg-gray-300"></div>
          <div className="flex gap-4 justify-center items-center">
            <p className="font-semibold text-engagepurple   border border-engagepurple p-4 pr-12 rounded-3xl">
              Upto 25,000 workflows
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-spotpurple -ml-14"
            >
              <path
                fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd"
              />
            </svg>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-spotpurple -ml-14"
            >
              <path
                fill-rule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clip-rule="evenodd"
              />
            </svg> */}

            {/* <div className="w-7 h-5 rotate-90 -ml-12 flex items-center">
              <Image src={Arrow} alt="mark"/>
            </div> */}
          </div>

          <ul className="flex flex-col gap-4 p-4 text-xs font-medium">
            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Unlimited templates
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Access to all channels
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Premium integrations not available
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Shared infrastructure
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Branding
            </li>
          </ul>

          <button className="inline-flex mb-4 items-center border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] px-4 py-2 text-lg font-medium rounded-[10px] font-poppins text-white hover:bg-gray-700">
            Get Started
          </button>
        </div>
      </div>

      {/* Third Card */}
      <div className="flex xl:p-10 lg:bg-white flex-col gap-6 mt-10 p-2 border rounded-xl shadow-md py-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl font-semibold text-spotpurple">Pro</h1>
          <h2 className="text-3xl font-semibold text-spotpurple">
            $559{" "}
            <span className="font-medium text-lg text-engagepurple">
              /month
            </span>
          </h2>
          <div className="w-[95%] h-0.5 bg-gray-300"></div>
          <p className="font-semibold text-engagepurple mb-6">Custom Pricing</p>

          <ul className="flex flex-col gap-4 p-4 text-xs font-medium">
            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Unlimited templates
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Access to all channels
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Premium integrations not available
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Shared infrastructure
            </li>

            <li className="flex gap-2">
              <div className="w-5 h-5">
                <Image src={Tick} alt="mark" />
              </div>
              Branding
            </li>
          </ul>

          <button className="inline-flex mb-4 items-center border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] px-4 py-2 text-lg font-medium rounded-[10px] font-poppins text-white hover:bg-gray-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
