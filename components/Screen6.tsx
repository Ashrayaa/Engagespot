import React from "react";
import Image from "next/image";
import Mail from "/public/mail.svg";
import Twilio from "/public/twilio.svg";
import Amazon from "/public/amazon.svg";
import Mailgun from "/public/mailgun.svg";

type Props = {};

export default function Screen6({}: Props) {
  return (
    <div>
      <h1 className="font-bold pt-20 text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-spotpurple to-engagepurple">
        Pick channels for your messages
      </h1>
      <p className="text-center font-semibold py-4">
        Setup your first notification in 5 minutes
      </p>

      <div className="bg-litepurple p-6 flex flex-col gap-14 justify-center items-center">
        <div className="flex gap-4 font-medium text-spotpurple border p-1 pb-0 border-spotpurple rounded-xl w-28">
          <div>
            <Image src={Mail} alt="Mail" />
          </div>
          <p>Mail</p>
        </div>

        <div className="flex flex-col gap-8 justify-center border border-engagepurple p-4 rounded-xl border-dotted">
          <div className="flex gap-8">
            <Image src={Twilio} alt="Twilio SendGrid" />
            <Image src={Amazon} alt="Amazon" />
          </div>
          <div className="flex justify-center">
            <Image src={Mailgun} alt="Mailgun" />
          </div>
        </div>
      </div>
    </div>
  );
}
