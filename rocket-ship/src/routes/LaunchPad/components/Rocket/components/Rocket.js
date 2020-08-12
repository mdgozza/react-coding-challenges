import React, { useState, Component, useContext, useEffect } from "react";
import RocketCore from "./RocketCore";
import { RocketContext } from "../../../RocketContext";

export function FunctionalRocket() {
  const [launch, setLaunch] = useContext(RocketContext);
  const [initialLaunchTime, setInitialLaunchTime] = useState(0);

  useEffect(() => {
    launch ? setInitialLaunchTime(Date.now()) : setInitialLaunchTime(0);

    return () => {
      if (launch) {
        setLaunch(false);
        setInitialLaunchTime(0);
      }
    };
  }, [launch, setLaunch]);

  return (
    <>
      <RocketCore initialLaunchTime={initialLaunchTime} />
    </>
  );
}

export class ClassRocket extends Component {
  static contextType = RocketContext;
  constructor() {
    super();

    this.state = { initialLaunchTime: 0, launch: false };
  }

  componentDidUpdate(prevProps, prevState) {
    const [launch] = this.context;
    if (prevState.launch !== launch && launch) {
      this.setState({
        initialLaunchTime: Date.now(),
        launch: this.context[0],
      });
    }

    if (prevState.launch !== launch && !launch) {
      this.setState({ initialLaunchTime: 0, launch: launch });
    }
  }

  componentWillUnmount() {
    const [launch, setLaunch] = this.context;
    setLaunch(false);
    this.setState({ initialLaunchTime: 0 });
  }

  render() {
    const { initialLaunchTime } = this.state;

    return (
      <>
        <RocketCore initialLaunchTime={initialLaunchTime} />
      </>
    );
  }
}
