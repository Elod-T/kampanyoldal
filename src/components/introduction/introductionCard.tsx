interface Props {
  name: string;
  description: string;
  image: string;
}

export default function IntroductionCard({ name, description, image }: Props) {
  return (
    <div
      className="absolute w-sm h-sm lg:w-md lg:h-md bg-dark-gray rounded-60px"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute -bottom-1 bg-dark-gray bg-opacity-65 w-md rounded-b-60px">
        <div className="px-10 pb-5">
          <h4 className="font-pirata text-2xl tracking-wide">{name}</h4>
          <p className="-mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
}
