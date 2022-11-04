import React from "react";
import Image from "next/image";
import Tick from "/public/tick.svg";

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
          <p className="font-semibold text-engagepurple  border border-engagepurple p-4 rounded-3xl">
            Upto 25,000 workflows
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
