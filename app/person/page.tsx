import Image from "next/image";
import manatee from "../../public/03a.jpg";

export default function PersonPage() {
  return (
    <div className="w-full 2xl:w-1/2 flex flex-col md:flex-row items-center justify-center">
      <div className="relative text-white">
        <Image src={manatee} alt="grant eadie" placeholder="blur" />
        <a
          href="https://www.instagram.com/portrapaige/"
          className="absolute bottom-0 left-0 text-xs p-2"
        >
          by Paige McLaughlin
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:px-10 py-10 text-sm">
        Manatee Commune is the project of Grant Eadie, a multi-instrumentalist
        in the Pacific Northwest.
        <br />
        <br /> A small obsession for field recordings, a foundation of classical
        training, and a fascination with the hypnosis of dance lead Eadie and
        his music weaving from the ambient and downtempo genres, to house and
        bass.
        <br />
        <br />
        Restful, detailed, childlike, meticulous, and unfettered, Manatee
        Commune has become an icon among the PNW for the liberated dance floor.
      </div>
    </div>
  );
}
