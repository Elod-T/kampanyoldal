import SingleProducts from "./singleProducts";
import Bundles from "./bundles";
import Note from "../../assets/graphics/note.svg";
import ExclamationPoint from "../../assets/graphics/exclamation-point.svg";

export default function Products() {
  return (
    <section className="custom-container mt-150 lg:mt-100">
      <div className="mx-auto w-fit mb-20 mt-32 to-reveal reveal-up">
        <h3
          id="products"
          className="font-pirata text-4xl text-center relative scroll-ma-200px"
        >
          Termékeink
          <img className="relative top-2 left-1 scale-85" src={Note} alt="" />
        </h3>
        <p className="max-w-md mx-auto text-center -mt-5">
          Válogass kedvedre a kampány termékeinkből. Minden egyes dizájn
          eredeti, saját megvalósítás
        </p>
      </div>
      <SingleProducts />

      <div className="mx-auto w-fit mb-20 mt-32">
        <h3
          id="bundles"
          className="font-pirata text-4xl text-center relative scroll-ma-200px"
        >
          Kalóz csomagok
          <img
            className="relative top-2 left-3 scale-85 rotate-5"
            src={ExclamationPoint}
            alt=""
          />
        </h3>
        <p className="max-w-md mx-auto text-center -mt-5">
          Válogass kedvedre a kampány termékeinkből. Minden egyes dizájn
          eredeti, saját megvalósítás
        </p>
      </div>

      <Bundles />
    </section>
  );
}
