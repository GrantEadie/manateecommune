import Image from "next/image";
import manatee from "../../public/03a.jpg";

export default function PersonPage() {
  return (
    <div className="w-full xl:w-1/2 flex flex-col md:flex-row items-center justify-center">
      <Image src={manatee} alt="grant eadie" />
      <div className="w-full lg:w-1/2 p-10 text-sm">
        Manatee Commune is Grant Eadie, born and raised in Spokane, Washington.
        <br />
        <br />
        Although wildly inconsistent, he does love to make music.
      </div>
    </div>
  );
}
