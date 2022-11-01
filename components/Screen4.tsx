import React from "react";
import Image from "next/image";
import Inapp from "/public/In-App.png";
import Email from "/public/email.png";
import Webpush from "/public/web push.png";
import Mobilepush from "/public/mobile push.png";
import Sms from "/public/sms.png";
import Chat from "/public/chat.png";
import User from "/public/user-pref.png";
import Custom from "public/fully customizable.png";
import Logs from "/public/logs.png";

type Props = {};

export default function Screen4({}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 justify-center items-center align-middle">
        <h1 className="text-xl px-4 font-bold sm:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple mt-8">
          Features to build the <br />
          Best notification experience{" "}
        </h1>
        <p className="text-center sm:px-32 md:px-64 lg:px-80 sm:text-xl text-xs py-2 leading-6">
          We&apos;ve built awesome features so you don&apos;t have to start from
          scratch. Just integrate our SDKs and APIs to build a scalable
          notification system for your product.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-10 py-12 px-4 sm:24 lg:px-32 xl:px-44">

        <div className="sm:grid sm:grid-cols-3 sm:grid-flow-col gap-6 sm:text-center sm:justify-center">
          <div className="border-0 sm:flex sm:flex-col sm:justify-center sm:items-center gap-2 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Inapp} alt="In app notification" />
            </div>

            <h1 className="font-semibold">In-App Notification</h1>
            <p className="text-xs leading-6">
              In-app notification component for front-end apps.
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>

          <div className="gap-2 sm:flex sm:flex-col sm:justify-center sm:items-center border-0 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Email} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Email Notification</h1>
            <p className="text-xs leading-6">
              Send email to users via Amazon SES, Sendgrid etc..
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>

          <div className="gap-2 lg:py-12 sm:flex sm:flex-col sm:justify-center sm:items-center border-0 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD]">
            {/* logo */}
            <div className="w-14">
              <Image src={Webpush} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Web Push</h1>
            <p className="text-xs leading-6">
              Built in support for browser push notifications.
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:grid-flow-col gap-6 sm:justify-center">
          <div className="gap-2 lg:py-12 sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-center border-0 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD]">
            {/* logo */}
            <div className="w-14">
              <Image src={Mobilepush} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Mobile Push</h1>
            <p className="text-xs leading-6">
              Deliver push notifications via FCM, APNS etc
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>

          <div className="gap-2 sm:flex sm:flex-col sm:justify-center sm:items-center border-0 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD]">
            {/* logo */}
            <div className="w-14">
              <Image src={Sms} alt="Email notification" />
            </div>

            <h1 className="font-semibold">SMS</h1>
            <p className="text-xs leading-6">
              Send SMS notifications to your users.
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>

          <div className="gap-2 sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-center border-0 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD]">
            {/* logo */}
            <div className="w-14">
              <Image src={Chat} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Chat</h1>
            <p className="text-xs leading-6">
              Send chat messages to your users
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>
        </div>

        <div className="sm:grid text-center sm:grid-flow-col gap-6 sm:justify-center">
          <div className="gap-2 lg:py-12 text-center sm:flex sm:flex-col sm:justify-center sm:items-center border-0 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD]">
            {/* logo */}
            <div className="w-14">
              <Image src={User} alt="Email notification" />
            </div>

            <h1 className="font-semibold">User Preferences</h1>
            <p className="text-xs leading-6 flex flex-wrap">
              Allow your users to set their notification preferences. UI
              components included.
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>

          <div className="gap-2 sm:flex sm:flex-col sm:justify-center sm:items-center border-0 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD]">
            {/* logo */}
            <div className="w-14">
              <Image src={Custom} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Fully Customizable</h1>
            <p className="text-xs leading-6">
              Customize front-end components and our backend SDKs and APIs to
              suit your needs.
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>

          <div className="gap-2 sm:flex sm:flex-col sm:justify-center sm:items-center border-0 p-4 rounded-xl shadow-lg shadow-[#FFE6FD] border-[#FFE6FD]">
            {/* logo */}
            <div className="w-14">
              <Image src={Logs} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Logs and Monitoring</h1>
            <p className="text-xs leading-6">
              Allow your users to set their notification preferences. UI
              components included.
            </p>
            <button className="text-spotpurple font-semibold text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}