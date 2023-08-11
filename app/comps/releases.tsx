import Image from "next/image";
import amaatOne from "../../public/amaat one cover.jpeg";
import crescentLake from "../../public/crescent_lake_cover.jpeg";

export const releasesData = [
  {
    img: amaatOne,
    url: "https://open.spotify.com/album/2elBATB2nvWGsWxvCPwQwU?si=gEdPBZu1S-uZ4vhtBvxrdw",
  },
  {
    img: crescentLake,
    url: "https://open.spotify.com/album/1qGcryowz7LzwEmKypsJ3G?si=yLuaWZYoQtGfNusGA5KTRQ",
  },
];

export default function Releases({}) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:w-3/4 gap-10">
        {releasesData.map(({ img, url }, i) => (
          <a key={i} href={url} target="_blank">
            <div className="--hover-img">
              <Image src={img} alt="an album cover" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
