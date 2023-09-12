import IntroductionCard from "./introductionCard";
import { CLASSMATES } from "../../consts";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

function rotateArray<T>(array: T[], n: number) {
  return array.slice(n, array.length).concat(array.slice(0, n));
}

const akos = CLASSMATES.find((classmate) => classmate.name === "Ákos");

const randomOrder = CLASSMATES.sort(() => Math.random() - 0.5);

const randomOrderWithAkos = [
  akos!,
  ...randomOrder.filter((classmate) => classmate.name !== "Ákos"),
];

export default function Introduction() {
  const [classmates, setClassmates] = useState(randomOrderWithAkos);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleFlip = () => {
      setIsFlipped(!isFlipped);

      setTimeout(() => {
        setClassmates(rotateArray(classmates, 1));
      }, 400);
    };

    const interval = setInterval(() => {
      handleFlip();
    }, 7500);

    return () => clearInterval(interval);
  }, [classmates, isFlipped]);

  return (
    <div className="relative top-10 md:left-40 lg:left-0 xl:right-20 xl:top-0">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <IntroductionCard
          key={classmates[0].name}
          name={classmates[0].name}
          description={classmates[0].description}
          image={classmates[0].image}
        />

        <IntroductionCard
          key={classmates[0].name}
          name={classmates[0].name}
          description={classmates[0].description}
          image={classmates[0].image}
        />
      </ReactCardFlip>
    </div>
  );
}
