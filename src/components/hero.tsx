import { CSSProperties } from "react";
import ClassPhoto from "../assets/class.png";
import FunArrow from "../assets/graphics/fun-arrow.svg";
import Pointer from "../assets/graphics/pointer.svg";
import ThreeLines from "../assets/graphics/three-lines.svg";

export default function Hero() {
  return (
    <section className="custom-container relative mt-48">
      <h1 className="font-pirata text-6xl sm:text-7xl tracking-wide text-center lg:text-left to-reveal reveal-left">
        Ákos és a 12.
        <span className="relative">
          B
          <img
            className="absolute -top-6 left-6"
            style={
              {
                "--delay": "0.4s",
              } as CSSProperties
            }
            src={ThreeLines}
            alt=""
          />
        </span>
      </h1>

      <p
        className="max-w-md -mt-5 lg:-mt-10 mx-auto text-center lg:(mx-0 text-left) to-reveal reveal-left"
        style={
          {
            "--delay": "0.1s",
          } as CSSProperties
        }
      >
        Mi vagyunk a 12.B, a Teleki tengereinek legádázabb kalózai! Tarts velünk
        egy hatalmas kalandra és szerezz életre szóló élményeket.
      </p>

      <div className="flex gap-x-5 mt-24 lg:mt-10 mx-auto w-fit lg:mx-0">
        <span
          className="relative to-reveal reveal-left"
          style={
            {
              "--delay": "0.4s",
            } as CSSProperties
          }
        >
          <a href="#aboutus" className="btn btn-red text-lg">
            Ismerj meg minket!
          </a>

          <img
            className="absolute top-5 -left-10 scale-30 md:scale-85 reveal-rotate-right to-reveal reveal-up"
            style={
              {
                "--delay": "0.6s",
              } as CSSProperties
            }
            src={FunArrow}
            alt=""
          />
        </span>

        <span
          className="relative to-reveal reveal-right"
          style={
            {
              "--delay": "0.8s",
            } as CSSProperties
          }
        >
          <a
            href="#products"
            className="btn bg-#1c1c1c text-white text-lg font-pirata hover:bg-opacity-70"
          >
            Pólórendelés
          </a>

          <img
            className="absolute top-4 -right-3 scale-85 to-reveal reveal-down"
            style={
              {
                "--delay": "1s",
              } as CSSProperties
            }
            src={Pointer}
            alt=""
          />
        </span>
      </div>

      <img
        className="absolute left-1/2 -top-10 invisible lg:visible rounded-tl-60px to-reveal reveal-right"
        style={
          {
            "--delay": "0.7s",
          } as CSSProperties
        }
        src={ClassPhoto}
        alt="Osztály fotó"
      />
    </section>
  );
}
