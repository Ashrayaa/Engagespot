import React from "react";
import Image from "next/image";
import Logo from "public/logo.svg";
import Menubar from "./Menubar";
import Head from "next/head";
import Link from "next/link";

type Props = {};

export default function Topnav({}: Props) {
  return (
    <nav className="lg:flex lg:justify-between xl:gap-44 lg:items-center lg:mx-6 xl:mx-20">
      {/* LOGO */}
      {/* lg:grid lg:grid-cols-2 lg:justify-center lg:items-center */}
      <div className="flex justify-center items-center gap-28 md:gap-52 sm:gap-44 cursor-pointer">
        <Link href="/"><Image src={Logo} alt="logo" width="200" /></Link>
       

        <Menubar />
      </div>

      {/* LINKS AND BUTTON */}
      {/* lg:-ml-44 */}
      <div className="lg:flex lg:justify-center lg:items-center lg:gap-10 hidden">
        <ul className="lg:flex lg:justify-center lg:items-center lg:gap-10 ">
          <Link href="/products">
            <li className="text-spotpurple font-semibold hover:text-gray-600 cursor-pointer">
              Products
            </li>
          </Link>

          <Link href="/pricing">
            <li className="text-spotpurple font-semibold hover:text-gray-600 cursor-pointer">
              Pricing
            </li>
          </Link>

          <Link href="/integration">
            <li className="text-spotpurple font-semibold hover:text-gray-600 cursor-pointer">
              Integrations
            </li>
          </Link>

          <Link href="/documentation">
            <li className="text-spotpurple font-semibold hover:text-gray-600 cursor-pointer">
              Documentation
            </li>
          </Link>

          <Link href="/blog">
            <li className="text-spotpurple font-semibold hover:text-gray-600 cursor-pointer">
              Blog
            </li>
          </Link>
        </ul>
        <div className=" ">
          <button className="inline-flex cursor-pointer items-center border border-transparent bg-gradient-to-r from-[#3B006A] to-[#7D1874] px-4 py-2 text-lg font-medium rounded-[5px] font-poppins text-white hover:bg-gray-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>

    // <div className="lg:grid lg:grid-cols-2">
    //   <div className="grid grid-flow-col gap-24 sm:grid-cols-2 sm:pt-8 sm:px-4 justify-center items-center">
    //     <Image src={Logo} alt="logo" width="200" />
    //     <Menubar />
    //   </div>

    //   <div className="lg:grid lg:grid-cols-2 lg:gap-12 hidden">
    //     <ul className="grid grid-cols-5 text-spotpurple font-semibold">
    //       <li>Products</li>
    //       <li>Pricing</li>
    //       <li>Integrations</li>
    //       <li>Documentation</li>
    //       <li>Blog</li>
    //     </ul>
    //     <button className="text-white bg-gradient-to-r from-spotpurple to-engagepurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-engagepurple font-semibold rounded-lg text-lg text-center">
    //       Get Started
    //     </button>
    //   </div>
    // </div>

    // <div className="flex lg:gap-[30%] justify-between">
    //   <div className="flex gap-20 justify-center items-center sm:ml-20">
    //     <Image src={Logo} alt="logo" width="200" />

    //     <Menubar />
    //     {/* <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //       className="w-10 h-10 sm:hidden"
    //     >
    //       <path
    //         fill-rule="evenodd"
    //         d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
    //         clip-rule="evenodd"
    //       />
    //     </svg> */}
    //   </div>
    //   <div className="hidden sm:flex justify-center items-center gap-12">
    // <ul className="flex gap-8 text-spotpurple font-semibold">
    //   <li>Products</li>
    //   <li>Pricing</li>
    //   <li>Integrations</li>
    //   <li>Documentation</li>
    //   <li>Blog</li>
    // </ul>
    // <button className="text-white p-2 px-4 w-[100%]  bg-gradient-to-r from-spotpurple to-engagepurple hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-engagepurple font-semibold rounded-lg text-lg text-center">
    //   Get Started
    // </button>
    //   </div>
    // </div>
  );
}
