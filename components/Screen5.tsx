import React from "react";

type Props = {};

export default function Screen5({}: Props) {
  return (
    <div>
      <p className="text-center font-medium sm:px-32 md:px-64 lg:px-80 sm:text-xl text-sm py-2 leading-6 mb-4">
        And many more features out-of-the box to build a notification system in
        minutes.
      </p>
      <div className="grid gap-4 text-xs pl-6">
        <ul className="grid grid-cols-2 gap-4 md:grid-rows-4 ">
          <li>Delivery Receipt</li>
          <li>Read Receipt</li>
          <li>SMTP Support</li>
          <li>Notification</li>
        </ul>
        <ul className="grid grid-cols-2 gap-4">
          <li>HMAC Auth</li>
          <li>User Identifiers</li>
          <li>Paginated Notifications</li>
          <li>React Hooks</li>
        </ul>
        <ul className="grid grid-cols-2 gap-4">
          <li>Notification Images</li>
          <li>Emoji Support</li>
          <li>Notification Sounds</li>
          <li>Custom Actions</li>
        </ul>
        <ul className="grid grid-cols-2 gap-4">
          <li>Fast Response Time</li>
          <li>Scalable Infrastructure</li>
          <li>Dedicated Support</li>
          <li>Enterprise SLA</li>
        </ul>
      </div>
    </div>
  );
}
