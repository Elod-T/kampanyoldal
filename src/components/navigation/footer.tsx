import Logo from "../../assets/graphics/logo.svg";
import Instagram from "../../assets/graphics/instagram.svg";

export default function Footer() {
  return (
    <footer className="mt-52 bg-dark-gray pt-10">
      <div className="w-fit mx-auto text-center">
        <div className="flex gap-x-5 w-fit mx-auto">
          <img className="w-15" src={Logo} alt="Logo" />
          <p className="font-pirata text-lg">Ákos és a 12.B</p>
        </div>

        <p className="text-sm mt-7 max-w-md">
          Sziasztok, mi vagyunk Ákos és a 12.B osztály. Tartsatok velünk az idei
          TN-en egy felejthetetlen kalandra!
        </p>
      </div>

      <div className="flex justify-between text-sm mt-20 px-10">
        <p>© 2023 Ákos és a 12.B Minden jog fenntartva.</p>

        <a
          href="https://www.instagram.com/akosesa12be/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="w-10" src={Instagram} alt="" />
        </a>
      </div>
    </footer>
  );
}
