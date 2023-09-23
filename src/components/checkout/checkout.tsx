import { useCart } from "react-use-cart";
import { FORM_POST_URL, FORM_INPUT_IDS } from "../../consts";
import { useRef, useState } from "react";
import type { Item } from "react-use-cart";
import Confetti from "react-confetti";
import {
  tshirtSizeLocalStoreKey,
  bandanaColorLocalStoreKey,
} from "../../consts";
import type { tshirtSizes, bandanaColors } from "../../consts";
import { useLocalStorage } from "usehooks-ts";

export default function Checkout() {
  const [canOrder, setCanOrder] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const [buttonText, setButtonText] = useState("Rendelés");
  const [showConfetti, setShowConfetti] = useState(false);
  const {
    items,
    cartTotal,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const tshirts = items.filter((item) => item.id === "1")[0]?.quantity ?? 0;
  const hoodies = items.filter((item) => item.id === "2")[0]?.quantity ?? 0;
  const bandanas = items.filter((item) => item.id === "3")[0]?.quantity ?? 0;

  const [tshirtSize] = useLocalStorage<(typeof tshirtSizes)[0]>(
    tshirtSizeLocalStoreKey,
    "M"
  );
  const [bandanaColor] = useLocalStorage<(typeof bandanaColors)[0]>(
    bandanaColorLocalStoreKey,
    "fekete"
  );

  const getTotalDiscount = () => {
    let totalDiscount = 0;

    let uncountedThirts = tshirts;
    let uncountedHoodies = hoodies;
    let uncountedBandanas = bandanas;

    while (
      uncountedThirts >= 1 &&
      uncountedHoodies >= 1 &&
      uncountedBandanas >= 1
    ) {
      totalDiscount += 1000;
      uncountedThirts -= 1;
      uncountedHoodies -= 1;
      uncountedBandanas -= 1;
    }

    while (uncountedThirts >= 1 && uncountedBandanas >= 1) {
      totalDiscount += 500;
      uncountedThirts -= 1;
      uncountedBandanas -= 1;
    }

    return totalDiscount;
  };

  const totalDiscount = getTotalDiscount();

  const handleOnSubmit = () => {
    setButtonText("Rendelés folyamatban...");

    setTimeout(() => {
      setButtonText("Sikeres rendelés!");
    }, 1000);

    setTimeout(() => {
      setButtonText("Rendelés");
    }, 20000);
  };

  const handleCanOrder = () => {
    setCanOrder(!canOrder);
  };

  const handleOrderFinished = () => {
    setShowConfetti(true);
    emptyCart();

    setTimeout(() => {
      setShowConfetti(false);
    }, 4300);
  };

  const addOne = (item: Item) => {
    updateItemQuantity(item.id, (item.quantity ?? 0) + 1);
  };

  const removeOne = (item: Item) => {
    if (item.quantity === 1) {
      removeItem(item.id);
    }

    updateItemQuantity(item.id, (item.quantity ?? 0) - 1);
  };

  return (
    <div
      className="absolute top-10 md:right-0 bg-#f1f1f1 text-black p-10 rounded-t-60px md:rounded-60px w-70vw h-screen md:h-fit -right-1/2 md:w-sm"
      ref={modalRef}
    >
      {showConfetti && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-60px">
          <Confetti
            recycle={false}
            numberOfPieces={400}
            width={modalRef.current?.clientWidth}
            height={modalRef.current?.clientHeight}
          />
        </div>
      )}

      {items.map((item) => (
        <div key={item.id} className="flex gap-x-5 items-center">
          <strong>{item.quantity}db</strong>
          <p>
            {item.name} - {item.price} ft/db
          </p>

          <button
            className="bg-gray-200 w-5 h-5 font-bold rounded-full grid place-items-center border-none cursor-pointer hover:bg-gray-300 duration-300"
            onClick={() => removeOne(item)}
          >
            -
          </button>
          <button
            className="bg-gray-200 w-5 h-5 font-bold rounded-full grid place-items-center border-none cursor-pointer hover:bg-gray-300 duration-300"
            onClick={() => addOne(item)}
          >
            +
          </button>
        </div>
      ))}

      <hr className="my-5" />

      <div className="flex gap-x-5 items-center">
        <strong>{totalDiscount}</strong>
        <p>ft kedvezmény</p>
      </div>

      <div className="flex gap-x-5 items-center">
        <strong>{totalItems}db</strong>
        <p>Összesen - {cartTotal - totalDiscount} ft</p>
      </div>

      <hr className="my-5" />

      <div>
        <iframe name="dummyframe" id="dummyframe" className="hidden"></iframe>

        <form
          action={FORM_POST_URL}
          target="dummyframe"
          onSubmit={handleOnSubmit}
        >
          <div className="grid grid-cols-2 w-1/2 gap-y-2 mt-5">
            <label htmlFor={FORM_INPUT_IDS.name} className="mt-1">
              Név
            </label>
            <input
              disabled
              required
              className="w-40 px-3 py-2 bg-transparent outline-none border focus:border-brand-red shadow-sm rounded-lg"
              type="text"
              name={FORM_INPUT_IDS.name}
              placeholder="pl.: Gyulai Ákos"
            />

            <label htmlFor={FORM_INPUT_IDS.class} className="mt-1">
              Osztály
            </label>
            <input
              disabled
              required
              className="w-40 px-3 py-2 bg-transparent outline-none border focus:border-brand-red shadow-sm rounded-lg"
              type="text"
              name={FORM_INPUT_IDS.class}
              placeholder="pl.: 12.B"
              pattern="[0-9]{1,2}(\.)?[a-zA-Z]"
            />
          </div>

          <input
            className="hidden"
            type="text"
            name={FORM_INPUT_IDS.tshirts}
            defaultValue={tshirts}
          />
          <input
            className="hidden"
            type="text"
            name={FORM_INPUT_IDS.hoodies}
            defaultValue={hoodies}
          />
          <input
            className="hidden"
            type="text"
            name={FORM_INPUT_IDS.bandanas}
            defaultValue={bandanas}
          />
          <input
            className="hidden"
            type="text"
            name={FORM_INPUT_IDS.tshirtSize}
            value={tshirtSize}
            readOnly
          />
          <input
            className="hidden"
            type="text"
            name={FORM_INPUT_IDS.bandanaColor}
            value={bandanaColor}
            readOnly
          />

          <div onClick={handleCanOrder}>
            <input
              disabled
              type="checkbox"
              className="mt-10"
              checked={canOrder}
              readOnly
            />
            <label className="ml-3">
              Elfogadom, hogy a rendelés gomb megnyomásával fizetési
              kötelezettséget vállalok.
            </label>
          </div>

          <button
            type="submit"
            disabled={true}
            className="btn btn-red font-inter mt-5"
            onClick={handleOrderFinished}
          >
            {buttonText}
          </button>
        </form>
      </div>

      <p className="text-xs italic">
        Rendelés módosítására, illetve lemondására csak személyesen van
        lehetőség
      </p>
    </div>
  );
}
