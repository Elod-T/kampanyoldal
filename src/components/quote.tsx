import { CSSProperties } from "react";
import DoubleUnderline from "../assets/graphics/double-underline.svg";
import FunUnderline from "../assets/graphics/fun-underline.svg";

export default function Quote() {
  return (
    <section className="mt-15vh lg:mt-35vh custom-container">
      <h2
        className="font-pirata tracking-wide mx-auto w-max text-4xl to-reveal reveal-up"
        style={
          {
            "--delay": "1.5s",
          } as CSSProperties
        }
      >
        <q>
          <span className="relative">
            Teleki
            <img
              className="absolute top-11 -left-1 scale-85"
              src={DoubleUnderline}
              alt=""
            />
          </span>{" "}
          <span className="break-line">a világunk, </span>
          Ákos a mi{" "}
          <span className="relative">
            királyunk
            <img
              className="absolute top-11 left-2 scale-85"
              src={FunUnderline}
              alt=""
            />
          </span>
        </q>
      </h2>
    </section>
  );
}
