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
      <div className="lg:grid flex flex-col lg:grid-cols-2 p-10 lg:pb-36">
        {/* FirstPart */}
        <div className="flex flex-col gap-4">
          <div className="">
            <Link href="/">
              <Image src={Logo} alt="logo" width="150" />
            </Link>
          </div>

          <p  className="font-extralight text-sm">Campaigns For Email, Linkedin, and Twitter</p>

          <div className="lg:mt-6 -ml-20 flex">
            <div>
              <Link href="/">
                <Image src={LinkedIn} alt="linkedin" width="200" />
              </Link>
            </div>
            <div className="-ml-36">
              <Link href="/">
                <Image src={Twitter} alt="twitter" width="200" />
              </Link>
            </div>
          </div>
        </div>
        {/* Second Part */}
        <div className="grid gap-8 mt-10 sm:grid-cols-3 lg:gap-6 lg:space-x-6 lg:pt-16">
          <ul className="">
            <li className="text-sm font-semibold">Products</li>
            <li className="text-xs font-extralight leading-6">Pricing</li>
            <li className="text-xs font-extralight leading-6">
              React Notifications
            </li>
            <li className="text-xs font-extralight leading-6">
              Notification UI Kit
            </li>
            <li className="text-xs font-extralight leading-6">Features</li>
            <li className="text-xs font-extralight leading-6">
              Disposable Email detector
            </li>
          </ul>
          <ul>
            <li className="text-sm font-semibold">Company</li>
            <li className="text-xs font-extralight leading-6">Blog</li>
            <li className="text-xs font-extralight leading-6">Discord</li>
            <li className="text-xs font-extralight leading-6">Doc</li>
            <li className="text-xs font-extralight leading-6">Roadmap</li>
          </ul>
          <ul>
            <li className="text-sm font-semibold">Channels</li>
            <li className="text-xs font-extralight leading-6">SMS</li>
            <li className="text-xs font-extralight leading-6">Email</li>
          </ul>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className="mx-10 h-0.5 bg-gray-400"></div>
      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* Bottom Part */}
      <div>
        <ul className="flex flex-col text-xs font-extralight gap-4 px-10 py-4 sm:flex-row lg:text-sm lg:font-medium lg:justify-between sm:mx-6 md:mx-24 lg:px-16 lg:p-4">
          <li className="text-center">2022 Engagespot.All rights reserved</li>
          <li>Help</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}
