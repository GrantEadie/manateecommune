import Image from "next/image";
import amaatOne from "../../public/amaat one cover.jpeg";
import crescentLake from "../../public/crescent_lake_cover.jpeg";
import pda from "../../public/pda_artwork.jpeg";
import unmastered from "../../public/unmastered_artwork.jpeg";
import selfTitled from "../../public/self_titled_artwork.jpeg";
import thistle from "../../public/thistle_album_art.jpeg";

export const releasesData = [
  {
    img: amaatOne,
    url: "https://open.spotify.com/album/2elBATB2nvWGsWxvCPwQwU?si=gEdPBZu1S-uZ4vhtBvxrdw",
  },
  {
    img: crescentLake,
    url: "https://open.spotify.com/album/1qGcryowz7LzwEmKypsJ3G?si=yLuaWZYoQtGfNusGA5KTRQ",
  },
  {
    img: pda,
    url: "https://open.spotify.com/album/2elBATB2nvWGsWxvCPwQwU?si=gEdPBZu1S-uZ4vhtBvxrdw",
  },
  {
    img: unmastered,
    url: "hello",
  },
  {
    img: selfTitled,
    url: "https://open.spotify.com/album/1qGcryowz7LzwEmKypsJ3G?si=yLuaWZYoQtGfNusGA5KTRQ",
  },
  {
    img: thistle,
    url: "https://open.spotify.com/album/1qGcryowz7LzwEmKypsJ3G?si=yLuaWZYoQtGfNusGA5KTRQ",
  },
];

export default function Releases({ displayNumber }: { displayNumber: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sxl:w-3/4">
        {releasesData.map(
          ({ img, url }, i) =>
            i < displayNumber && (
              <a key={i} href={url} target="_blank">
                <div className="--hover-img">
                  <Image src={img} alt="an album cover" />
                </div>
              </a>
            )
        )}
      </div>
    </div>
  );
}
