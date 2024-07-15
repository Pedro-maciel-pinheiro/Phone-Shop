import React from "react";
import ParallaxComponent from "./components/ParallaxComponent";
import RedMagicNavBar from "./components/RedMagicNavBar";

export default function RedMagicShowCase() {
  return (
    <>
      <div className="bg-black">
        <RedMagicNavBar />
      </div>
      <div className="min-h-screen w-full bg-black">
        <ParallaxComponent />
      </div>
      <div></div>
    </>
  );
}
