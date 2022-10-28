import React from "react";

type Props = {};

export default function Screen4({}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        <h1
        className="text-xl px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-spotpurple to-engagepurple mt-8"
        >Features to build the <br/>
         Best notification experience </h1>
        <p>
          We&apos;ve built awesome features so you don&apos;t have to start from
          scratch. Just integrate our SDKs and APIs to build a scalable
          notification system for your product.
        </p>
      </div>
      <div>
        <div>
          {/* logo */}
          <h1>In-App Notification</h1>
          <p>In-app notification component for front-end apps.</p>
          <button>Learn More</button>
        </div>

        <div>
          {/* logo */}
          <h1>Email Notification</h1>
          <p>Send email to users via Amazon SES, Sendgrid etc..</p>
          <button>Learn More</button>
        </div>

        <div>
          {/* logo */}
          <h1>Web Push</h1>
          <p>Built in support for browser push notifications.</p>
          <button>Learn More</button>
        </div>

        <div>
          {/* logo */}
          <h1>Mobile Push</h1>
          <p>Deliver push notifications via FCM, APNS etc</p>
          <button>Learn More</button>
        </div>

        <div>
          {/* logo */}
          <h1>SMS</h1>
          <p>Send SMS notifications to your users.</p>
          <button>Learn More</button>
        </div>

        <div>
          {/* logo */}
          <h1>Chat</h1>
          <p>Send chat messages to your users via Slack.</p>
          <button>Learn More</button>
        </div>

        <div>
          {/* logo */}
          <h1>User Preferences</h1>
          <p>Allow your users to set their notification preferences. UI components included.</p>
          <button>Learn More</button>
        </div>

        <div>
          {/* logo */}
          <h1>Fully Customizable</h1>
          <p>Customize front-end components and our backend SDKs and APIs to suit your needs.</p>
          <button>Learn More</button>
        </div>

        <div>
          {/* logo */}
          <h1>Logs and Monitoring</h1>
          <p>Allow your users to set their notification preferences. UI components included.</p>
          <button>Learn More</button>
        </div>

      </div>
    </div>
  );
}
