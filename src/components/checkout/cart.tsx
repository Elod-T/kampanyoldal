import { useCart } from "react-use-cart";
import CartImage from "../../assets/graphics/cart.svg";
import { useState } from "react";
import Checkout from "./checkout";

export default function Cart() {
  const [open, setOpen] = useState(false);

  const { totalItems, isEmpty } = useCart();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <div className="hover:scale-110 duration-300">
        {!isEmpty && (
          <p className="absolute bottom-2 -right-2 bg-green rounded-full w-4 h-4.3 grid place-items-center text-sm text-black">
            {totalItems}
          </p>
        )}

        <img
          id="cart"
          className="cursor-pointer"
          src={CartImage}
          alt=""
          onClick={handleOpen}
        />
      </div>

      {open && <Checkout />}
    </div>
  );
}
