import Link from "next/link";
import React from "react";

const WelcomePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-full flex flex-col items-center justify-center text-center font-semibold">
        <p className="text-2xl text-yellow-50">iPhone 15 Pro</p>
        <video src="/video/Titanium.mp4" autoPlay muted />
      </div>
      <div className="flex flex-col items-center gap-4 w-full max-w-xl mx-auto">
        <Link href={""}>
          <button className="text-white font-semibold rounded-full bg-blue-600 w-16 h-8 active:translate-y-1 transition-all ">
            Buy
          </button>
        </Link>
        <p className="text-white text-2xl">
          From $999 or $41.62/mo. for 24 mo.1
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
