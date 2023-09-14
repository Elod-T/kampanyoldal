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

export const tshirtSizes: ("S" | "M" | "L" | "XL" | "XXL")[] = [
  "S",
  "M",
  "L",
  "XL",
  "XXL",
];
export const tshirtSizeLocalStoreKey = "tshirtSize";

export const bandanaColors: ("fekete" | "piros")[] = ["fekete", "piros"];
export const bandanaColorLocalStoreKey = "bandanaColor";

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
    description: "Póló + pulcsi + bandana - 1000ft kedvezmény",
  },
];

export const FORM_POST_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScRM2P6-4hHYxW3rVcdbVL35v7lXUQJIFPj1OFVD2GG55GIuA/formResponse";

export const FORM_INPUT_IDS = {
  name: "entry.799079966",
  class: "entry.839494663",
  tshirts: "entry.2042746473",
  tshirtSize: "entry.385895971",
  hoodies: "entry.383043782",
  bandanas: "entry.1925995943",
  bandanaColor: "entry.1534591832",
};

export const CLASSMATES = [
  {
    name: "Ákos",
    description:
      "A királyunk: Rasztájáról, firkált kezéről könnyen megismerheted. Hatalmas szívével és ragyogó mosolyával pillanatok alatt belopja magát az ember szívébe.",
    image: "/photos/gyulai.webp",
  },
  {
    name: "Belágyi Hanna",
    description:
      "Hogyha szükséged van varrónőre, őt kell keresni. Egy jó kártyapartyban mindig bennevan.",
    image: "/photos/belagyi-hanna.webp",
  },
  {
    name: "Berger Hanna",
    description:
      "Igazi szorgos matróz, mindig csinál valamit. Egy dobverővel bármikor elver.",
    image: "/photos/berger-hanna.webp",
  },
  {
    name: "Buday Timi",
    description:
      "Ha a legeslegcukrabb embert keresed, megtaláltad. Fizika és infó spec lelkes tagja.",
    image: "/photos/timi.webp",
  },
  {
    name: "Darabont Bálint",
    description:
      "Pincében bérelt helye van. Ha megkóstolnád a világ legjobb chilis babját, Bálint az embered.",
    image: "/photos/darabont.webp",
  },
  {
    name: "Dombi Eszti",
    description: "Fizika nagy szerelmese. Bármit megszerel.",
    image: "/photos/dombi-eszti.webp",
  },
  {
    name: "Gáncsos Bálint",
    description: "Törzshelye a stúdió és a vatikán.",
    image: "/photos/gancsos-balint.webp",
  },
  {
    name: "Hegyi Ákos",
    description:
      "Biciklizés után nem látni sérülés nélkül. Piromán hajlamai már fiatalon kezdtek a felszínre törni. Művészi vénája osztályunk nagy büszkesége.",
    image: "/photos/hegyi.webp",
  },
  {
    name: "Horváth Roland",
    description: `Bioszon forma1et nézve találod. A házibulik "(s)ördöge".`,
    image: "/photos/roland.webp",
  },
  {
    name: "Imre Dóri",
    description: `Le van maradva, mint a borravaló. Belga sört iszoM. A '"csodálatos" francia nyelv beszélője.`,
    image: "/photos/imre-dori.webp",
  },
  {
    name: "Kardos Krisztián Máté",
    description:
      "Igazi maximalista, nézzetek csak rá a kampánypólónkra. Pizzával egy magas cápát keressetek. Kell valami a felső polcról?",
    image: "/photos/krisz.webp",
  },
  {
    name: "Kaufmann Petra",
    description:
      "A beépített osztályfőnök. sokszor mad (most is amint ezt beírtam)",
    image: "/photos/petra.webp",
  },
  {
    name: "Keöves Eszter",
    description:
      "Elveszik a gólyák között. A legjobb fotókat ő csinálja. Alkohol helyett multiba folytja bánatát.",
    image: "/photos/keoves-eszter.webp",
  },
  {
    name: "Keresztesi Réka",
    description:
      "Egy társaspartyban mindig benne van. Bioszspecek nem hivatalos, furcsa mód önkéntes látogatója.",
    image: "/photos/reka.webp",
  },
  {
    name: "Kiss Nonó",
    description: "A sportok királynője. A fonatok mestere.",
    image: "/photos/nono.webp",
  },
  {
    name: "Kotmayer Botond",
    description:
      "Az a híres nagyfejű. Bitond haja öl, butít, és nyomorba dönt.",
    image: "/photos/botond.webp",
  },
  {
    name: "Kovács Márton",
    description:
      "Amikor vív, egészen martalóc, de még mindig köpcös. Prémes szakállát a Holdról is kiszúrni.",
    image: "/photos/marton.webp",
  },
  {
    name: "Németh Máté",
    description: "Egy jó röpi meccsre mindig vevő. Sí-tippekért őt keresd.",
    image: "/photos/mate.webp",
  },
  {
    name: "Orosz Dóri",
    description: "Csupaszív állatvédő. A tantárgy-manók ősanyja.",
    image: "/photos/orosz-dori.webp",
  },
  {
    name: "Paraidi Bence",
    description:
      "Az osztály polihisztora, csak bioszról ne kérdezd. De még is a foci kommentálásban leli legnagyobb örömét. ",
    image: "/photos/paraidi.webp",
  },
  {
    name: "Pete Viola",
    description:
      "A Vati, a Múzeum és az irodalomspec lelkes látogatója. Visszafogott kiskacajáról bármikor felismered.",
    image: "/photos/viola.webp",
  },
  {
    name: "Riba Eszti",
    description: "Tetkók ipari rajzolója. Bulik lelkes résztvevője.",
    image: "/photos/riba-eszti.webp",
  },
  {
    name: "Simon Fruzsi",
    description:
      "Több világjamboreen részt vett. Pozitív kisugárzásából bármikor felismered",
    image: "/photos/fruzsi.webp",
  },
  {
    name: "Sipos Kristóf",
    description:
      "Professzionális stúdiós és átlagon felüli érdeklődési körei közé tartozik a Formula 1. Ha stúdióban nem, Vatiban vagy Pincében biztos megtalálod.",
    image: "/photos/kristof.webp",
  },
  {
    name: "Somos Gergő",
    description:
      "Mély orgánumával még SzabóG-t is túlharsogja. Nála jobban senki nem hekkkelte a fizikaórákat.",
    image: "/photos/gergo.webp",
  },
  {
    name: "Tihanyi Eszter",
    description:
      "Ha diagnózisra van szükséged Tesztit bármikor keresheted. Ha valaki ékes hajkoronáját fonatok díszítik, Eszti a ludas.",
    image: "/photos/tihanyi-eszter.webp",
  },
  {
    name: "Tobak Előd",
    description:
      "Németországban felgyújtotta az iskolát. Aktív cápaként funkcionál jobb napjain.",
    image: "/photos/elod.webp",
  },
  {
    name: "Valicsek Donát",
    description:
      "A vörös kipattintott fiatalember. Kriminális osztálytársunk, aki előszeretettel provokálja a tanárokat.",
    image: "/photos/donat.webp",
  },
  {
    name: "Végh Barnabás",
    description:
      "Angol specre is csak matekházit írni ül be. Extrém biciklizés lelkes művelője.",
    image: "/photos/barnabas.webp",
  },
  {
    name: "Szabó Gábor",
    description: `A koszinusz tétel fantáborát erősíti. "Na most ezt deriváld le nekem!". "Ne hekkeld az órámat"`,
    image: "/photos/szabog.webp",
  },
  {
    name: "Kiss Ildikó",
    description:
      "Csupaszív osztályfőnökünk. Vigyázzatok vele, mert nem most jött le a falvédőről.",
    image: "/photos/kiss-ildiko.webp",
  },
  {
    name: "Cápák",
    description: "Az osztályunk hőnszeretett kabalái.",
    image: "/photos/capak.webp",
  },
  {
    name: "Sinkó Ákos",
    description: `"Life's a race be a racist". Az autója km/h-val megy de a sebesség korlát m/s.`,
    image: "/photos/sinko.webp",
  },
  {
    name: "Ádám László Vilmos",
    description:
      "Bármikor felismered ékes magyar tájszólásáról. A kubu fogyasztói társadalom nagy részét ő teszi ki.",
    image: "/photos/laci.webp",
  },
];
