import React from "react";
import ParallaxComponent from "./components/ParallaxComponent";
import RedHighlights from "./components/RedHighlights";
import RedPerformance from "./components/RedPerformance";
import RedCooling from "./components/RedCooling";
import RedBattery from "./components/RedBattery";
import BorderLine from "./components/BorderLine";
import { orbitron } from "../layout";
import RedMagicNavBar from "./components/RedNavBar";

export default function RedMagicShowCase() {
  return (
    <>
      <RedMagicNavBar />
      <div className={`bg-black ${orbitron.className}`}>
        <div id="#Design">
          <ParallaxComponent />
        </div>
        <div>
          <RedHighlights />
          <BorderLine pageNumber={1} title={"A New Standard of Performance"} />
        </div>
        <div>
          <RedPerformance />
          <BorderLine pageNumber={2} title={"Incredibly Cold"} />
        </div>
        <div>
          <RedCooling />
          <BorderLine pageNumber={3} title={"the best battery we have !"} />
        </div>
        <div>
          <RedBattery />
        </div>
      </div>
    </>
  );
}
