import Logo from "../../assets/graphics/logo.svg";
import Cart from "../checkout/cart";

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 left-0 w-screen bg-neutral-gray ">
      <div className="px-10 flex justify-between items-center h-20">
        <a href="/">
          <img className="w-15" src={Logo} alt="" />
        </a>

        <div className="flex gap-x-5 items-center">
          <a href="#aboutus" className="text-white no-underline">
            Rólunk
          </a>

          <a href="#products" className="text-white no-underline">
            Termékeink
          </a>

          <a href="#bundles" className="btn btn-red text-lg">
            Csomagjaink
          </a>

          <Cart />
        </div>
      </div>
    </nav>
  );
}
