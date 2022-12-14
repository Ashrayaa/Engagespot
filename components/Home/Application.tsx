import React from "react";
import Image from "next/image";
import Mail from "/public/mail.svg";
import Twilio from "/public/twilio.svg";
import Amazon from "/public/amazon.svg";
import Mailgun from "/public/mailgun.svg";
import Push from "/public/push.svg";
import Firebase from "/public/firebase.svg";
import Xiaomi from "/public/xiomi.svg";
import Apple from "/public/apple.svg";
import SMS from "/public/sms.svg";
import Red from "/public/red.svg";
import Message from "/public/messagebird.svg";
import Sinch from "/public/sinch.svg";
import Gupshup from "/public/gupshup.svg";
import Karix from "/public/karix.svg";
import Whatsapp from "/public/whatsapp.svg";
import Chat from "/public/chat.svg";
import Slack from "/public/slack.svg";
import Inbox from "/public/inbox.svg";
import Engagespot from "/public/logo.svg";

type Props = {};

export default function Screen6({}: Props) {
  return (
    <div className="px-6">
      <h1 className="font-bold pt-20 text-2xl lg:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-b from-spotpurple to-engagepurple">
        Pick channels for your messages
      </h1>
      <p className="text-center lg:text-xl font-semibold py-4">
        Setup your first notification in 5 minutes
      </p>

      <div className="bg-litepurple lg:flex-col xl:mx-44 xl:pl-24 lg:mx-16 p-6 lg:p-12 flex flex-col gap-14 justify-center items-center lg:items-start rounded-2xl">
        {/* Mail section */}
        <div className="flex lg:flex-row flex-col lg:gap-2 gap-8 justify-center items-center">
          <div className="flex pt-2 gap-4 font-medium text-spotpurple border p-1 pb-0 border-spotpurple rounded-xl w-28">
            <div>
              <Image src={Mail} alt="Mail" />
            </div>
            <p>Mail</p>
          </div>

          <div className="flex flex-col leading-3 text-engagepurple rotate-90 lg:rotate-0">
            <p>--------</p>
            <p>-----</p>
            <p>--------</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-center border border-engagepurple p-4 rounded-lg border-dashed">
            <div className="flex gap-8">
              <Image src={Twilio} alt="Twilio SendGrid" />
              <Image src={Amazon} alt="Amazon" />
            </div>
            <div className="flex justify-center">
              <Image src={Mailgun} alt="Mailgun" />
            </div>
          </div>
        </div>

        <div className="w-[95%] h-0.5 bg-gray-200 lg:hidden"></div>

        {/* Push Section */}
        <div className="flex lg:flex-row flex-col lg:gap-2 gap-8 justify-center items-center">
          <div className="flex pt-2 gap-4 font-medium text-spotpurple border p-1 pb-0 border-spotpurple rounded-lg w-28">
            <div>
              <Image src={Push} alt="Push" />
            </div>
            <p>Push</p>
          </div>
          <div className="flex flex-col leading-3 text-engagepurple rotate-90 lg:rotate-0">
            <div>--------</div>
            <div>-----</div>
            <div>--------</div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center border border-engagepurple p-4 rounded-xl border-dashed">
            <div className="flex gap-8">
              <Image src={Firebase} alt="Firebase" />
              <Image src={Xiaomi} alt="Xiaomi" />
            </div>
            <div className="flex justify-center">
              <Image src={Apple} alt="Apple" />
            </div>
          </div>
        </div>

        <div className="w-[95%] h-0.5 bg-gray-200 lg:hidden"></div>

        {/* SMS Section */}
        <div className="flex lg:flex-row flex-col lg:gap-2 gap-8 justify-center items-center">
          <div className="flex pt-2 gap-4 font-medium text-spotpurple border p-1 pb-0 border-spotpurple rounded-xl w-28">
            <div>
              <Image src={SMS} alt="SMS" />
            </div>
            <p>SMS</p>
          </div>

          <div className="flex flex-col leading-3 text-engagepurple rotate-90 lg:rotate-0">
            <div>--------</div>
            <div>----</div>
            <div>--------</div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-center border border-engagepurple p-4 rounded-xl border-dashed">
            <div className="flex gap-8">
              <Image src={Red} alt="Twilio" />
              <Image src={Message} alt="Messagebird" />
            </div>
            <div className="flex gap-8">
              <Image src={Sinch} alt="Sinch" />
              <Image src={Gupshup} alt="Gupshup" />
            </div>
            <div className="flex justify-center">
              <Image src={Karix} alt="Karix" />
            </div>
          </div>
        </div>

        <div className="w-[95%] h-0.5 bg-gray-200 lg:hidden"></div>

        {/* Whatsapp */}
        <div className="flex lg:flex-row flex-col lg:gap-2 gap-8 justify-center items-center">
          <div className="flex pt-2 gap-2 font-medium text-xs text-spotpurple border p-1 pb-0 border-spotpurple rounded-xl w-28">
            <div>
              <Image src={Whatsapp} alt="Whatsapp" />
            </div>
            <p className="flex justify-center items-center">Whatsapp</p>
          </div>

          <div className="flex flex-col leading-3 text-engagepurple rotate-90 lg:rotate-0">
            <div>--------</div>
            <div>----</div>
            <div>--------</div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-center border border-engagepurple p-4 rounded-xl border-dashed">
            <div className="flex gap-8">
              <Image src={Karix} alt="Karix" />
              <Image src={Gupshup} alt="Gupshup" />
            </div>
          </div>
        </div>

        <div className="w-[95%] h-0.5 bg-gray-200 lg:hidden"></div>

        {/* Chat */}
        <div className="flex lg:flex-row flex-col lg:gap-2 gap-8 justify-center items-center">
          <div className="flex pt-2 gap-4 font-medium text-spotpurple border p-1 pb-0 border-spotpurple rounded-xl w-28">
            <div>
              <Image src={Chat} alt="Chat" />
            </div>
            <p>Chat</p>
          </div>
          <div className="flex flex-col leading-3 text-engagepurple rotate-90 lg:rotate-0">
            <div>--------</div>
            <div>----</div>
            <div>--------</div>
          </div>
          <div className="flex flex-col gap-8 justify-center border border-engagepurple px-3 py-4 rounded-xl border-dashed">
            <div className="px-10">
              <Image src={Slack} alt="Slack" />
            </div>
          </div>
        </div>

        <div className="w-[95%] h-0.5 bg-gray-200 lg:hidden"></div>
        {/* Inbox */}
        <div className="flex lg:flex-row flex-col lg:gap-2 gap-8 justify-center items-center">
          <div className="flex pt-2 gap-4 font-medium text-spotpurple border p-1 pb-0 border-spotpurple rounded-xl w-28">
            <div>
              <Image src={Inbox} alt="Inbox" />
            </div>
            <p>Inbox</p>
          </div>

          <div className="flex flex-col leading-3 text-engagepurple rotate-90 lg:rotate-0">
            <div>--------</div>
            <div>----</div>
            <div>--------</div>
          </div>

          <div className="flex flex-col gap-8 justify-center border border-engagepurple px-4 rounded-xl border-dashed">
            <div>
              <Image src={Engagespot} alt="Engagespot" width={150}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
