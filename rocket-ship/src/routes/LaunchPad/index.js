import * as React from "react";
import { ClassRocket, FunctionalRocket } from "./components/Rocket/";
import LaunchPad from "./components/LaunchPad";

export default function Picker() {
  const [Rocket, setRocket] = React.useState(() => ClassRocket);

  function toggleLaunchPad() {
    setRocket((Rocket) =>
      Rocket === ClassRocket ? FunctionalRocket : ClassRocket
    );
  }

  return (
    <div>
      <LaunchPad Rocket={Rocket} />
      <div style={{ display: "flex" }}>
        <h4 style={{ marginRight: "1rem" }}>
          {Rocket === ClassRocket ? "Class Rocket" : "Functional Rocket"}
        </h4>
        <button onClick={toggleLaunchPad}>Toggle LaunchPad</button>
      </div>
    </div>
  );
}
