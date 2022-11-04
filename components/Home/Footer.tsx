import React from "react";
import Image from "next/image";
import Logo from "public/logowhite.svg";
import LinkedIn from "public/linkedin.svg";
import Twitter from "public/twitter.svg";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="text-white bg-gradient-to-r from-spotpurple to-engagepurple mt-12">
      {/* Top Part */}
      <div className="lg:grid flex flex-col lg:grid-cols-2 p-10 lg:pb-36 xl:-space-x-32 lg:-space-x-10">
        {/* FirstPart */}
        <div className="flex flex-col gap-4">
          <div className="">
            <Link href="/">
              <Image src={Logo} alt="logo" width="200" />
            </Link>
          </div>

          <p className="font-light text-lg">
            Campaigns For Email, Linkedin, and Twitter
          </p>

          <div className="lg:mt-6 -ml-20 flex gap-6">
            <div>
              <Link href="https://www.linkedin.com/company/engagespot-co/">
                <Image src={LinkedIn} alt="linkedin" width="200" />
              </Link>
            </div>
            <div className="-ml-36">
              <Link href="https://twitter.com/engagespot?lang=en">
                <Image src={Twitter} alt="twitter" width="200" />
              </Link>
            </div>
          </div>
        </div>
        {/* Second Part */}
        <div className="grid gap-8 mt-10 sm:grid-cols-3 lg:gap-6 lg:space-x-6 lg:pt-8">
          <ul className="">
            <li className="text-xl font-semibold">Products</li>
            <li className="text-lg leading-10">Pricing</li>
            <li className="text-lg  leading-10">
              React Notifications
            </li>
            <li className="text-lg  leading-10">
              Notification UI Kit
            </li>
            <li className="text-lg  leading-10">Features</li>
            <li className="text-lg  leading-10">
              Disposable Email detector
            </li>
          </ul>
          <ul>
            <li className="text-xl font-semibold">Company</li>
            <li className="text-lg  leading-10">Blog</li>
            <li className="text-lg  leading-10">Discord</li>
            <li className="text-lg  leading-10">Doc</li>
            <li className="text-lg  leading-10">Roadmap</li>
          </ul>
          <ul>
            <li className="text-xl font-semibold">Channels</li>
            <li className="text-lg  leading-10">SMS</li>
            <li className="text-lg  leading-10">Email</li>
          </ul>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className="mx-10 h-0.5 bg-gray-400"></div>
      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* Bottom Part */}
      <div className="-mb-20">
        <ul className="flex flex-col text-xs font-light gap-4 px-10 py-4 sm:flex-row sm:text-xs sm:font-extralight lg:text-lg md:ml-16 lg:justify-between sm:mx-6 lg:px-16 lg:p-4">
          <li className="">© 2022 Engagespot. All rights reserved.</li>
          <li>Help</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}
