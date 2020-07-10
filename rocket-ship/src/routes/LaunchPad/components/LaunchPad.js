import React  from 'react';
import '../styles/_launchpad.scss';

export default function LaunchPad({Rocket, launch}) {
  return (
    <div className="launchpad">
      <Rocket launch={launch} />
    </div>
  );
}
