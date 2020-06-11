import React, { useState, useLayoutEffect } from 'react';
import '../styles/_launchpad.scss';

export default function LaunchPad({Rocket}) {
  const [rerenderCount, triggerRerender] = useState(0);
  const [start, setStart] = useState(false);

  useLayoutEffect(() => {
    if (rerenderCount < 10) {
      setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);
    }
  }, [rerenderCount])

  function handleLaunch() {
    setStart(true);
    if (rerenderCount >= 10) {
      triggerRerender(0);
    }
  }
  
  return (
    <div className="launchpad">
      <button onClick={handleLaunch}>Launch</button>
      <Rocket start={start} />
    </div>
  );
}