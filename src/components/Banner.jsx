import React from "react";
import Typewriter from "typewriter-effect";
import FlickeringBoxes from "../doodles/FlickeringBoxes";
import PropTypes from "prop-types";

export default function Banner() {
  return (
    <section className="banner">
      <FlickeringBoxes />
      <span className="banner__containt">
        <h1 className="banner__title">Kevin Arias</h1>
        <h2 className="banner__subtitle">
          <Typewriter
            options={{
              strings: [
                "Ambitious Learner",
                "Quality Seeker",
                "Cooperative Worker",
                "Software Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </span>
    </section>
  );
}
