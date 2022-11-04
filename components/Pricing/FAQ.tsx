import React from "react";

type Props = {};

export default function FAQ({}: Props) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-4 bg-[#f9f3fe] mt-6 px-6 mx-6">
      <h1 className="text-2xl font-semibold">FAQ</h1>
      <ul className="flex flex-col p-2 gap-4">
        <li>
          <h2 className="flex justify-between items-center cursor-pointer">
            <span className="active:text-engagepurple text-black text-sm font-medium">
              What is MAU?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-spotpurple"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </h2>
          <p className="text-xs">
            MAU - Monthly Active User is a user who connect to our notification
            feed atleast once in a calendar month.
          </p>
        </li>

        <div className="h-0.5 bg-gray-300"></div>

        <li>
          <h2 className="flex justify-between items-center cursor-pointer">
            <span className="active:text-engagepurple text-black text-sm font-medium ">
            What about concurrency?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-spotpurple"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </h2>
          <p className="text-xs hidden">
            MAU - Monthly Active User is a user who connect to our notification
            feed atleast once in a calendar month.
          </p>
        </li>

        <div className="h-0.5 bg-gray-300"></div>

        <li>
          <h2 className="flex justify-between items-center cursor-pointer">
            <span className="active:text-engagepurple text-black text-sm font-medium ">
            What happens if I cross MAU limit?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-spotpurple"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </h2>
          <p className="text-xs hidden">
            MAU - Monthly Active User is a user who connect to our notification
            feed atleast once in a calendar month.
          </p>
        </li>

        <div className="h-0.5 bg-gray-300"></div>

        <li>
          <h2 className="flex justify-between items-center cursor-pointer">
            <span className="active:text-engagepurple text-black text-sm font-medium ">
            What happens if I cross 10% concurrency limit?
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-6 text-spotpurple"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </h2>
          <p className="text-xs hidden">
            MAU - Monthly Active User is a user who connect to our notification
            feed atleast once in a calendar month.
          </p>
        </li>

        <div className="h-0.5 bg-gray-300"></div>
      </ul>
    </div>
  );
}
