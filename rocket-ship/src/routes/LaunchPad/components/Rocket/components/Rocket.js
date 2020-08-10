import React, { useState, Component } from "react";
import RocketCore from "./RocketCore";

export function FunctionalRocket() {
  const [initialLaunchTime, setInitialLaunchTime] = useState("");

  return (
    <>
      <RocketCore initialLaunchTime={initialLaunchTime} />
      <button onClick={(e) => setInitialLaunchTime(Date.now())}>
        launch Rocket
      </button>
    </>
  );
}

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: "",
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return (
      <>
        <RocketCore initialLaunchTime={initialLaunchTime} />
        <button
          onClick={(e) => this.setState({ initialLaunchTime: Date.now() })}
        >
          launch Rocket
        </button>
      </>
    );
  }
}
