import React from "react";
import ParallaxComponent from "./components/ParallaxComponent";
import RedNavBar from "./components/RedNavBar";
import RedHighlights from "./components/RedHighlights";
import RedPerformance from "./components/RedPerformance";
import RedCooling from "./components/RedCooling";
import RedBattery from "./components/RedBattery";
import BorderLine from "./components/BorderLine";

export default function RedMagicShowCase() {
  return (
    <>
      <div className="bg-black">
        <RedNavBar />
      </div>
      <BorderLine pageNumber={1}/>
      <div className="min-h-screen w-full bg-black" id="#Design">
        <ParallaxComponent />
      </div>
      <div className="bg-black">
        <RedHighlights />
      </div>
      <div className="bg-black">
        <RedPerformance />
      </div>
      <div className="bg-black">
        <RedCooling />
      </div>
      <div className="bg-black">
        <RedBattery />
      </div>
    </>
  );
}
