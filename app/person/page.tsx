import Image from "next/image";
import manatee from "../../public/03a.jpg";

export default function PersonPage() {
  return (
    <div className="w-full xl:w-1/2 flex flex-col md:flex-row items-center justify-center">
      <div className="relative text-white">
        <Image src={manatee} alt="grant eadie" />
        <a
          href="https://www.instagram.com/portrapaige/"
          className="absolute bottom-0 left-0 text-xs p-2"
        >
          by Paige McLaughlin
        </a>
      </div>
      <div className="w-full lg:w-1/2 lg:px-10 py-10 text-sm">
        Manatee Commune is Grant Eadie, born and raised in Spokane, Washington.
        <br />
        <br />
        Although wildly inconsistent, he does love to make music.
      </div>
    </div>
  );
}
