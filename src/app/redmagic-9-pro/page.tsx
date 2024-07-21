import React from "react";
import ParallaxComponent from "./components/ParallaxComponent";
import RedHighlights from "./components/RedHighlights";
import RedPerformance from "./components/RedPerformance";
import RedCooling from "./components/RedCooling";
import RedBattery from "./components/RedBattery";
import BorderLine from "./components/BorderLine";
import { orbitron } from "@/types/types";
import RedMagicNavBar from "./components/RedNavBar";
import RedExperience from "./components/RedExperience";
import RedSound from "./components/RedSound";

export default function RedMagicShowCase() {
  return (
    <>
      <RedMagicNavBar />
      <div className={`bg-black ${orbitron.className}`}>
        <div id="Design">
          <ParallaxComponent />
        </div>
        <div id="Highlights">
          <RedHighlights />
          <BorderLine pageNumber={1} title={"A New Standard of Performance"} />
        </div>
        <div id="Performance">
          <RedPerformance />
          <BorderLine pageNumber={2} title={"Incredibly Cold"} />
        </div>
        <div id="Cooling">
          <RedCooling />
        </div>
        <div id="Battery">
          <BorderLine pageNumber={3} title={"The best battery we have !"} />
          <RedBattery />
        </div>
        <div id="Experience">
          <BorderLine pageNumber={4} title={"Designed to Triumph"} />
          <RedExperience />
        </div>
        <div id="Sound">
          <BorderLine pageNumber={5} title={"The best audio system"} />
          <RedSound />
        </div>
      </div>
    </>
  );
}
