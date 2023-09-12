import { useCart } from "react-use-cart";
import {
  PRODUCTS,
  tshirtSizes,
  tshirtSizeLocalStoreKey,
  bandanaColors,
  bandanaColorLocalStoreKey,
} from "../../consts";
import type { Product, Bundle } from "../../consts";
import { useRef } from "react";
import { useLocalStorage } from "usehooks-ts";

const ANIMATION_DURATION = 750;

const withQuantity = (product: Product | Bundle) => {
  return {
    ...product,
    quantity: 1,
  };
};

export default function Card({ product }: { product: Product | Bundle }) {
  const { addItem } = useCart();

  const [tshirtSize, setTshirtSize] = useLocalStorage<(typeof tshirtSizes)[0]>(
    tshirtSizeLocalStoreKey,
    "M"
  );
  const [bandanaColor, setBandanaColor] = useLocalStorage<
    (typeof bandanaColors)[0]
  >(bandanaColorLocalStoreKey, "fekete");

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAddItem = () => {
    if ("contents" in product) {
      product.contents.forEach((productId) => {
        const product = PRODUCTS.find((p) => p.id === productId);

        if (!product) {
          return;
        }

        setTimeout(() => {
          addItem(withQuantity(product));
        }, ANIMATION_DURATION);
      });
    } else {
      setTimeout(() => {
        addItem(withQuantity(product));
      }, ANIMATION_DURATION);
    }

    const item = document.createElement("div");
    item.className = "absolute z-100 bg-green rounded-full w-4 h-4.3";
    document.body.appendChild(item);

    const cart = document.getElementById("cart");
    const cartPosition = cart?.getBoundingClientRect();

    if (!cartPosition) {
      return;
    }

    item.animate(
      [
        {
          top: `${buttonRef.current?.getBoundingClientRect().top}px`,
          left: `${buttonRef.current?.getBoundingClientRect().left}px`,
          opacity: 0.3,
        },
        {
          top: `${cartPosition.top}px`,
          left: `${cartPosition.left}px`,
          opacity: 1,
        },
      ],
      {
        duration: ANIMATION_DURATION,
        easing: "ease-out",
      }
    );

    setTimeout(() => {
      document.body.removeChild(item);
    }, ANIMATION_DURATION);
  };

  const handleSizeSelect = (size: (typeof tshirtSizes)[0]) => {
    setTshirtSize(size);
  };

  return (
    <div className="max-w-full text-center bg-dark-gray p-5 rounded-30px to-reveal reveal-up">
      <h3 className="text-xl">{product.name}</h3>

      {"description" in product && <p>{product.description}</p>}

      <p className="-mt-2">
        <i>{product.price} ft / db</i>
      </p>

      {"image" in product && product.image != null && (
        <img
          className="mt-5 w-58 aspect-square object-cover rounded-30px"
          src={product.image}
          alt=""
        />
      )}

      {"video" in product && product.video != null && (
        <video
          className="mt-5 w-58 aspect-square object-cover rounded-30px"
          src={product.video}
          autoPlay
          loop
          muted
        />
      )}

      {product.name === "Kampánypóló" && (
        <div className="mt-4 flex gap-x-4 mx-auto w-fit">
          {tshirtSizes.map((size) => (
            <div key={size}>
              <label htmlFor={size}>{size}</label>
              <input
                className="radio-btn ml-2"
                type="radio"
                name={size}
                checked={size == tshirtSize}
                onClick={handleSizeSelect.bind(null, size)}
              />
            </div>
          ))}
        </div>
      )}

      {product.name === "Bandana" && (
        <div className="mt-4 flex gap-x-4 mx-auto w-fit">
          {bandanaColors.map((color) => (
            <div key={color}>
              <label htmlFor={color}>{color}</label>
              <input
                className="radio-btn ml-2"
                type="radio"
                name={color}
                checked={color == bandanaColor}
                onClick={() => setBandanaColor(color)}
              />
            </div>
          ))}
        </div>
      )}

      {product.name === "Kampánypulcsi" && <div className="h-8"></div>}

      <button
        className="btn mt-10 hover:bg-truegray-400 hover:text-white"
        onClick={handleAddItem}
        ref={buttonRef}
      >
        Kosárba
      </button>
    </div>
  );
}
