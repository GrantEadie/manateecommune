import Image from "next/image";
import amaatOne from "../../public/amaat one cover.jpeg";
import crescentLake from "../../public/crescent_lake_cover.jpeg";

export default function Releases() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:w-3/4 gap-10">
      <div className="--hover">
        <Image src={amaatOne} alt="album cover for the single Amaat One" />
      </div>
      <div className="--hover">
        <Image src={crescentLake} alt="album cover for the single Amaat One" />
      </div>
    </div>
  );
}
