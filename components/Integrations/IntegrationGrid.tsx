import React from "react";
import Image from "next/image";
import Twilio from "/public/twilio.svg";
import Amazon from "/public/amazon.svg";
import Mailgun from "/public/mailgun.svg";

import Firebase from "/public/firebase.svg";

import Red from "/public/red.svg";
import Message from "/public/messagebird.svg";
import Sinch from "/public/sinch.svg";
import Gupshup from "/public/gupshup.svg";
import Karix from "/public/karix.svg";

import Arrow from "/public/arrow.svg";

type Props = {};

export default function IntegrationGrid({}: Props) {
  return (
    <div className="flex flex-col xl:px-12">
      {/* <div className="flex flex-col gap-2 justify-center items-center align-middle">
        <h1 className="hidden text-xl px-4 font-semibold sm:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple mt-8">
          Features to build the <br />
          Best notification experience{" "}
        </h1>
        <p className="hidden text-center sm:text-lg lg:px-10 text-xs pt-2 sm:pt-4 leading-6">
          We&apos;ve built awesome features so you don&apos;t have to start from
          scratch. Just integrate our SDKs and APIs to build a scalable
          notification system for your product.
        </p>
      </div> */}

      <div className="flex flex-col justify-center gap-6 py-6 px-4 lg:gap-10 lg:px-32 xl:px-44">
        <div className="md:grid md:grid-cols-3 md:grid-flow-col lg:gap-10 grid gap-6 md:text-center md:justify-center">
          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl shadow-sm shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="">
              <Image src={Twilio} alt="Twilio Sendgrid" />
            </div>

            <h1 className="font-semibold text-lg">Sendgrid</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl  shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="">
              <Image src={Amazon} alt="Amazon" />
            </div>

            <h1 className="font-semibold text-lg">Amazon</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl  shadow-md shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Mailgun} alt="Mailgun" />
            </div>

            <h1 className="font-semibold text-lg">Sendgrid</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
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
          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl  shadow-md shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Red} alt="Twilio" />
            </div>

            <h1 className="font-semibold text-lg">Twilio</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
            </p>

            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl  shadow-md shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Message} alt="MessageBird" />
            </div>

            <h1 className="font-semibold text-lg">Message Bird</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
            </p>

            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl shadow-md shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Sinch} alt="Sinch" />
            </div>

            <h1 className="font-semibold text-lg">Sinch</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
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
          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl  shadow-md shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Karix} alt="Karix" />
            </div>

            <h1 className="font-semibold text-lg">Karix</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
            </p>
            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl  shadow-md shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Gupshup} alt="Gupshup" />
            </div>

            <h1 className="font-semibold text-lg">Gupshup</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
            </p>

            <div className="flex gap-2">
              <button className="text-spotpurple font-semibold text-sm">
                Learn More
              </button>
              <Image src={Arrow} alt="arrow" width={7} />
            </div>
          </div>

          <div className="border md:flex md:flex-col sm:justify-center md:items-center flex flex-col gap-2 p-4 rounded-xl  shadow-md shadow-[#FFE6FD] border-[#FFE6FD] lg:py-12">
            {/* logo */}
            <div className="w-14">
              <Image src={Firebase} alt="Firebase" />
            </div>

            <h1 className="font-semibold text-lg">Firebase</h1>
            <button className="border border-slate-300 rounded-lg flex px-2 w-16 text-[#929292]">
              email
            </button>
            <p className="text-xs leading-5">
              Leverage the email service that customer-first brands trust for
              reliable inbox delivery at scale.
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
