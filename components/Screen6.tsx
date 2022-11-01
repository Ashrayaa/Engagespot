import React from "react";

type Props = {};

export default function Screen6({}: Props) {
  return (
    <div>
      <h1 className="font-bold pt-20 text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-spotpurple to-engagepurple">
        Pick channels for your messages
      </h1>
      <p className="text-center font-semibold py-4">
        setup your first notification in 5 minutes
      </p>

      <div className="bg-litepurple">
        <div>
          <div>image</div>
          <p>Mail</p>
        </div>
      </div>
    </div>
  );
}
