import Introduction from "./introduction/introduction";
import Arrow from "../assets/graphics/arrow.svg";

export default function AboutUs() {
  return (
    <section className="custom-container mt-50 xl:flex gap-x-100">
      <div className="mt-20 mx-auto w-fit lg:mx-0 relative xl:left-20">
        <div className="relative">
          <p className="text-brand-red font-bold">Rólunk</p>

          <img
            className="absolute bottom-10 -left-5 to-reveal reveal-left"
            src={Arrow}
            alt=""
          />
        </div>
        <h3 id="aboutus" className="-mt-2 text-3xl font-bold scroll-ma-200px">
          Ismerj meg minket
        </h3>
        <p className="max-w-md">
          Kis osztályunk sokszínűsége több területen szerzett már előnyt
          számunkra. Ha az a kérdés, honnan szerzel egy orvospalántát, aki zenél
          vagy egy mérnököt, aki történész, akkor a 12. B-t kell keresned.
        </p>
      </div>

      <Introduction />
    </section>
  );
}
