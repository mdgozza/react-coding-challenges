import React, { useState, useEffect } from "react";
import "../styles/_launchpad.scss";
import { RocketContext } from "../RocketContext";

export default function LaunchPad({ Rocket }) {
  const [rerenderCount, triggerRerender] = useState(0);

  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    launch &&
      setTimeout(() => {
        triggerRerender(rerenderCount + 1);
      }, 500);
  }, [launch, rerenderCount]);

  return (
    <div className="launchpad">
      <RocketContext.Provider value={[launch, setLaunch]}>
        <Rocket />
      </RocketContext.Provider>

      <button onClick={() => setLaunch(!launch)}>
        {launch ? "Stop" : "Launch"}
      </button>
    </div>
  );
}
