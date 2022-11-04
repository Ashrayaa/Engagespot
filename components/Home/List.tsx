import React from "react";
import Image from "next/image";
import Tick from "/public/tick.svg";

type Props = {};

export default function Screen5({}: Props) {
  return (
    <div className="px-4 mx-4">
      <p className="text-center font-medium sm:text-xl md:text-2xl text-sm py-2 leading-6 mb-4">
        And many more features out-of-the box to build a notification system in
        minutes.
      </p>
      <div className="grid  gap-8 text-xs pl-4 lg:pl-8 xl:pl-32 2xl:pl-36 sm:pl-12 md:pl-24">
        <ul className="grid lg:grid-cols-4 lg:p-6 grid-cols-2 gap-8">
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Delivery Receipt
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Read Receipt
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            SMTP Support
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Notification
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            HMAC Auth
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            User Identifiers
          </li>
          <li className="flex gap-3 sm:gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Paginated Notifications
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            React Hooks
          </li>
          <li className="flex gap-3 sm:gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Notification Images
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Emoji Support
          </li>
          <li className="flex gap-3 sm:gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Notification Sounds
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Custom Actions
          </li>
          <li className="flex gap-3 sm:gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Fast Response Time
          </li>
          <li className="flex gap-3 sm:gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Scalable Infrastructure
          </li>
          <li className="flex gap-3 sm:gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Dedicated Support
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>
            Enterprise SLA
          </li>
        </ul>
      </div>

      {/* <div className="lg:px-2 lg:pl-24 lg:visible hidden md:hidden sm:hidden">
        <ul className="lg:grid lg:grid-cols-4 lg:gap-10 lg:py-8">
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Delivery Receipt
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Read Receipt
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            SMTP Support
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Notification
          </li>
        </ul>
        <ul className="lg:grid lg:grid-cols-4 lg:gap-10 lg:py-8">
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            HMAC Auth
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            User Identifiers
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Paginated Notifications
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            React Hooks
          </li>
        </ul>
        <ul className="lg:grid lg:grid-cols-4 lg:gap-10 lg:py-8">
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Notification Images
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Emoji Support
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Notification Sounds
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Custom Actions
          </li>
        </ul>
        <ul className="lg:grid lg:grid-cols-4 lg:gap-10 lg:py-8">
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Fast Response Time
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Scalable Infrastructure
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Dedicated Support
          </li>
          <li className="flex gap-2">
            <div className="w-5 h-5">
              <Image src={Tick} alt="mark" />
            </div>{" "}
            Enterprise SLA
          </li>
        </ul>
      </div> */}
    </div>
  );
}
