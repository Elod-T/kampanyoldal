import Placeholder from "./assets/placeholder.png";
import TShirtVideo from "./assets/tshirt.mp4";
import Bandana from "./assets/bandana.png";
import Pulcsi from "./assets/pulcsi.png";

export type Product = (typeof PRODUCTS)[0];
export const PRODUCTS = [
  {
    id: "1",
    name: "Kampánypóló",
    price: 2500,
    image: null,
    video: TShirtVideo,
  },
  {
    id: "2",
    name: "Kampánypulcsi",
    price: 5000,
    image: Pulcsi,
    video: null,
  },
  {
    id: "3",
    name: "Bandana",
    price: 1000,
    image: Bandana,
    video: null,
  },
];

export type Bundle = (typeof BUNDLES)[0];
export const BUNDLES = [
  {
    id: "4",
    name: "Kezdő kalóz szett",
    price: 3000,
    contents: ["1", "3"],
    description: "Póló + bandana fél áron",
  },
  {
    id: "5",
    name: "Teljes kalóz szett",
    price: 7500,
    contents: ["1", "2", "3"],
    description: "Póló + pulcsi + ingyenes bandana",
  },
];

export const FORM_POST_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScRM2P6-4hHYxW3rVcdbVL35v7lXUQJIFPj1OFVD2GG55GIuA/formResponse";

export const FORM_INPUT_IDS = {
  name: "entry.799079966",
  class: "entry.839494663",
  tshirts: "entry.2042746473",
  hoodies: "entry.383043782",
  bandanas: "entry.1925995943",
};

export const CLASSMATES = [
  {
    name: "Ákos",
    description:
      "A királyunk: Rasztájáról, firkált kezéről könnyen megismerheted.",
    image: "/photos/gyulai.jpg",
  },
  {
    name: "Belágyi Hanna",
    description:
      "Hogyha szükséged van varrónőre, őt kell keresni. Egy jó kártyapartyban mindig bennevan.",
    image: "/photos/belagyi-hanna.jpg",
  },
  {
    name: "Berger Hanna",
    description:
      "Igazi szorgos matróz, mindig csinál valamit. Ha kíváncsi vagy a világűr titkaira, Hanna tud mesélni.",
    image: "/photos/berger-hanna.jpg",
  },
  {
    name: "Buday Timi",
    description:
      "Ha a legeslegcukrabb embert keresed, megtaláltad. Fizika és infó spec lelkes tagja.",
    image: "/photos/timi.jpg",
  },
  {
    name: "Darabont Bálint",
    description:
      "Pincében bérelt helye van. Ha megkóstolnád a világ legjobb chilis babját, Bálint az embered.",
    image: "/photos/darabont.jpg",
  },
  {
    name: "Dombi Eszti",
    description: "Fizika nagy szerelmese. Bármit megszerel.",
    image: "/photos/dombi-eszti.jpg",
  },
  {
    name: "Gáncsos Bálint",
    description: "Törzshelye a stúdió és a vatikán. Kéthetente leszokik.",
    image: "/photos/gancsos-balint.jpg",
  },
  {
    name: "Hegyi Ákos",
    description:
      "Biciklizés után nem látni sérülés nélkül. Piromán hajlamai már fiatalon kezdtek a felszínre törni. Művészi vénája osztályunk nagy büszkesége.",
    image: "/photos/hegyi.jpg",
  },
  {
    name: "Horváth Roland",
    description: `Bioszon forma1et nézve találod. A házibulik "(s)ördöge".`,
    image: "/photos/roland.jpg",
  },
  {
    name: "Horváth Roland",
    description: `Bioszon forma1et nézve találod. A házibulik "(s)ördöge".`,
    image: "/photos/roland.jpg",
  },
  {
    name: "Imre Dóri",
    description: `Le van maradva, mint a borravaló. Belga sört iszok iszom. A '"csodálatos" francia nyelv beszélője.`,
    image: "/photos/imre-dori.jpg",
  },
  {
    name: "Kardos Krisztián Máté",
    description:
      "Igazi maximalista, nézzetek csak rá a kampánypólónkra. Pizzával egy magas cápát keressetek.",
    image: "/photos/krisz.jpg",
  },
  {
    name: "Kaufmann Petra",
    description: "A beépített osztályfőnök.",
    image: "/photos/petra.jpg",
  },
  {
    name: "Keöves Eszter",
    description:
      "Elveszik a gólyák között. A legjobb fotókat ő csinálja. Alkohol helyett multiba folytja bánatát.",
    image: "/photos/keoves-eszter.jpg",
  },
  {
    name: "Keresztesi Réka",
    description: "Egy társaspartyban mindig benne van.",
    image: "/photos/reka.jpg",
  },
  {
    name: "Kiss Nonó",
    description: "Játékokban verhetetlen. A sportok királynője.",
    image: "/photos/nono.jpg",
  },
  {
    name: "Kotmayer Botond",
    description:
      "Az a híres nagyfejű. Bitond haja öl, butít, és nyomorba dönt. ",
    image: "/photos/botond.jpg",
  },
  {
    name: "Kovács Márton",
    description: "Amikor vív, egészen martalóc, de még mindig köpcös.",
    image: "/photos/marton.jpg",
  },
  {
    name: "Németh Máté",
    description: "Egy jó röpi meccsre mindig vevő. Sí-tippekért őt keresd.",
    image: "/photos/mate.jpg",
  },
  {
    name: "Orosz Dóri",
    description: "Csupaszív állatvédő. A tantárgy-manók ősanyja.",
    image: "/photos/orosz-dori.jpg",
  },
  {
    name: "Paraidi Bence",
    description:
      "Az osztály polihisztora, csak bioszról ne kérdezd. De még is a foci kommentálásban leli legnagyobb örömét. ",
    image: "/photos/paraidi.jpg",
  },
  {
    name: "Pete Viola",
    description: "A Vati, a Múzeum és az irodalomspec lelkes látogatója.",
    image: "/photos/viola.jpg",
  },
  {
    name: "Riba Eszti",
    description: "Tetkók ipari rajzolója. Bulik lelkes résztvevője.",
    image: "/photos/riba-eszti.jpg",
  },
  {
    name: "Simon Fruzsi",
    description:
      "Több világjamboreen részt vett. Pozitív kisugárzásából bármikor felismered",
    image: "/photos/fruzsi.jpg",
  },
  {
    name: "Sipos Kristóf",
    description:
      "Professzionális stúdiós és átlagon felüli érdeklődési körei közé tartozik a Formula 1.",
    image: "/photos/kristof.jpg",
  },
  {
    name: "Somos Gergő",
    description: "Haszontalan dagadt.",
    image: "/photos/gergo.jpg",
  },
  {
    name: "Tihanyi Eszter",
    description:
      "Ha diagnózisra van szükséged Tesztit bármikor keresheted/A csapat hajóorvosa.",
    image: "/photos/tihanyi-eszter.jpg",
  },
  {
    name: "Tobak Előd",
    description: "Németországban felgyújtotta az iskolát. Aktív cápa.",
    image: "/photos/elod.jpg",
  },
  {
    name: "Valicsek Donát",
    description: "A vörös kipattintott fiatalember.",
    image: "/photos/donat.jpg",
  },
  {
    name: "Végh Barnabás",
    description:
      "Angol specre is csak matekházit írni ül be. Extrém biciklizés lelkes művelője.",
    image: "/photos/barnabas.jpg",
  },
  {
    name: "Szabó Gábor",
    description: `A koszinusz tétel fantáborát erősíti. "Na most ezt deriváld le nekem!". "Ne hekkeld az órámat"`,
    image: "/photos/szabog.jpg",
  },
  {
    name: "Kiss Ildikó",
    description: "Csupaszív osztályfőnökünk.",
    image: Placeholder,
  },
];
