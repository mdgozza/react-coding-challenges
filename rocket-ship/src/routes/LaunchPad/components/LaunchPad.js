import React, { useState, useEffect } from "react";
import "../styles/_launchpad.scss";

export default function LaunchPad({ Rocket }) {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => {
    triggerRerender(rerenderCount + 1);
  }, 500);

  return (
    <div className="launchpad">
      <Rocket />
    </div>
  );
}
