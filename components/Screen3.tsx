import React from "react";
import Image from "next/image";
import Cardimage from "public/cardimg.svg";

type Props = {};

export default function Screen3({}: Props) {
  return (
    <div className="flex flex-col items-center gap-6">

      <h1 className="text-3xl px-8 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple mt-8 ">
        Ship faster with our Notification API
      </h1>

      <div className="p-4 w-16 h-16 bg-gradient-to-b text-center from-spotpurple to-engagepurple text-white font-semibold text-3xl border rounded-full">
        1
      </div>
      <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple">
        Create your notification workflows
      </h2>
      <p className="font-medium px-4 text-engagepurple">
        Use our powerful workflow builder to create cross channel notification
        workflows with advanced features such as batching, wait to send, and
        if-then behavior.
      </p>
      <Image src={Cardimage} alt="card" />
      <div className="p-4 w-16 h-16 bg-gradient-to-b text-center from-spotpurple to-engagepurple text-white font-semibold text-3xl border rounded-full">
        2
      </div>
      <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple">
        Connect your providers
      </h2>
      <p className="font-medium px-4 text-engagepurple">
        Integrate with out-of-app channels such as email, push, SMS, and Slack,
        and power in-app channels via our in-app notifications API and pre-built
        components.
      </p>
      <Image src={Cardimage} alt="card" />
      <div className="p-4 w-16 h-16 bg-gradient-to-b text-center from-spotpurple to-engagepurple text-white font-semibold text-3xl border rounded-full">
        3
      </div>
    </div>
  );
}
