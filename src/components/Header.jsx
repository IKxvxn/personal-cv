import React from "react";
import Typewriter from "typewriter-effect";

import PropTypes from "prop-types";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("I'm Kevin Arias Chinchilla.")
              .pauseFor(1500)
              .deleteChars(1)
              .typeString(",")
              .start();
          }}
        />
      </h1>
    </div>
  );
}
