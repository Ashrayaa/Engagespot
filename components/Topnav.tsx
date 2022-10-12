import React from "react";
import Image from "next/image";
import Logo from "public/logo.svg";

type Props = {};

export default function Topnav({}: Props) {
  return (
    <div>
      <div className="flex gap-16 p-4 lg:ml-16">
        <Image src={Logo} alt="logo" width="200" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 lg:hidden"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>

        <div className="">
            <ul>
                <li></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
