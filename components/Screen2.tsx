import React from "react";
import Image from "next/image";
import Kerala from "public/keralastartup.png";
import Ink from "public/inkmasters.png";
import Ribit from "public/RibitWhite.png";
import Martino from "public/martino.svg";
import Sameday from "public/sameday.png";

type Props = {};

export default function Screen2({}: Props) {
  return (
    <div className="flex flex-col items-center font-bold text-white bg-gradient-to-r from-spotpurple to-engagepurple">
      <h1 className="mt-8">TRUSTED BY DEVELOPERS AT</h1>
      <ul className="flex flex-col sm:flex-row sm:p-24 p-14 px-28 gap-10">
        <li>
          <a>
          <Image src={Kerala} alt="displayimage" />
          </a>
        </li>
        <li className="bg-white">
          <a>
          <Image src={Ink} alt="displayimage" />
          </a>
        </li>
        <li>
          <a>
          <Image src={Sameday} alt="displayimage" />
          </a>
        </li>
        <li className="bg-white">
          <a>
          <Image src={Ribit} alt="displayimage" />
          </a>
        </li>
        <li className="bg-white">
          <a>
          <Image src={Martino} alt="displayimage" />
          </a>
        </li>
      </ul>
    </div>
  );
}
