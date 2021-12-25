import React from "react";
import "css-doodle";
import useWindowDimensions from "../hooks/windowDimentions";

export default function FlickeringBoxes() {
  const { width, height } = useWindowDimensions();

  return (
    <css-doodle grid={width > height ? "16x8" : "8x16"}>
      {`:doodle {
            @size:100%;
            position: absolute;
        }

        background: #410b13;
        mix-blend-mode: soft-light;
        opacity: @r(0, 0.7);

        
        animation: flickering infinite 3s linear;

        :hover {
            opacity: 1;
            animation:unset;
        }

        --init: @r(0, 0.7);
        @keyframes flickering {
            0% {
                opacity: var(--init);
            }
            50% {
                opacity: @r(0, 0.7);
              }
            100% {
                opacity: var(--init);
            }
          }

        `}
    </css-doodle>
  );
}
