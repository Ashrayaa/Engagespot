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
import Arrow from "/public/arrow.svg";
type Props = {};

export default function Screen4({}: Props) {
  return (
    <div className="flex flex-col xl:px-12 px-6">
      <div className="flex flex-col gap-2 justify-center items-center align-middle">
        <h1 className="text-xl px-4 font-semibold sm:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple mt-8">
          Features to build the <br />
          Best notification experience{" "}
        </h1>
        <p className="text-center sm:text-lg lg:px-10 text-xs pt-2 sm:pt-4 leading-6">
          We&apos;ve built awesome features so you don&apos;t have to start from
          scratch. Just integrate our SDKs and APIs to build a scalable
          notification system for your product.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-6 py-6 px-4 lg:gap-10 lg:px-32 xl:px-44">
        <div className="md:grid md:grid-cols-3 md:grid-flow-col lg:gap-10 grid gap-6 md:text-center md:justify-center">
          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Inapp} alt="In app notification" />
            </div>

            <h1 className="font-semibold">In-App Notification</h1>
            <p className="text-xs leading-6">
              In-app notification component for front-end apps.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Email} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Email Notification</h1>
            <p className="text-xs leading-6">
              Send email to users via Amazon SES, Sendgrid etc..
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Webpush} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Web Push</h1>
            <p className="text-xs leading-6">
              Built in support for browser push notifications.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>
        </div>

        <div className="sm:grid md:grid-cols-3 md:grid-flow-col lg:gap-10 grid gap-6 md:justify-center">
          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Mobilepush} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Mobile Push</h1>
            <p className="text-xs leading-6 md:text-center">
              Deliver push notifications via FCM, APNS etc
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Sms} alt="Email notification" />
            </div>

            <h1 className="font-semibold">SMS</h1>
            <p className="text-xs leading-6 md:text-center">
              Send SMS notifications to your users.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Chat} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Chat</h1>
            <p className="text-xs leading-6 md:text-center">
              Send chat messages to your users
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>
        </div>

        <div className="sm:grid md:grid-cols-3 md:grid-flow-col lg:gap-10 grid gap-6 md:justify-center">
          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={User} alt="User Preferences" />
            </div>

            <h1 className="font-semibold">User Preferences</h1>
            <p className="text-xs leading-6 md:text-center">
              Allow your users to set their notification preferences. UI
              components included.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Custom} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Fully Customizable</h1>
            <p className="text-xs leading-6 md:text-center">
              Customize front-end components and our backend SDKs and APIs to
              suit your needs.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="hover:border md:flex md:flex-col sm:justify-center md:items-center gap-2 p-4 rounded-xl  hover:shadow-md hover:shadow-[#FFE6FD] hover:border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Logs} alt="Email notification" />
            </div>

            <h1 className="font-semibold">Logs and Monitoring</h1>
            <p className="text-xs leading-6 md:text-center">
              Allow your users to set their notification preferences. UI
              components included.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
