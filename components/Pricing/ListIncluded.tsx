import React from "react";
import Image from "next/image";
import Tick from "/public/tick.svg";

type Props = {};

export default function ListIncluded({}: Props) {
  return (
    <div className="flex flex-col gap-6 bg-[#f9f3fe] mt-6 p-4 rounded-xl lg:rounded-2xl lg:mx-16 lg:mb-24 mx-4">
      <h1 className="font-semibold pt-4 text-2xl lg:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-b from-spotpurple to-engagepurple">
        What&apos;s Included
      </h1>

      <ul className="text-xs grid lg:grid-rows-3 sm:grid-rows-6 sm:grid-flow-col sm:space-y-1 sm:pl-4 items-center justify-center sm:gap-10 lg:grid-flow-col lg:gap-12 p-8 gap-4 ">
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>
          Web & Mobile Push Notifications
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>
          Notification UI Kit
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          Notification Preference UI Kit
        </li>
        <li className="flex gap-1 ">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          Email Notifications
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          Notification Preference API
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          Email Notifications
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          SMS Notifications
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          In-App Notifications
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          Remove &apos;Powered by Engagespot&apos; branding
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          Chat Notifications
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          Notification Categories
        </li>
        <li className="flex gap-1">
          <div className="w-5 h-5">
            <Image src={Tick} alt="mark" />
          </div>{" "}
          Built-in Notification Preference Center
        </li>
      </ul>
    </div>
  );
}
