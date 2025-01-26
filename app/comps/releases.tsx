import Image from "next/image";
import amaatOne from "../../public/amaat one cover.jpeg";
import cast from "../../public/cast_artwork_reduced.jpeg";
import path from "../../public/path.jpeg";
import faulted from "../../public/faulted_artwork_(single).jpg"
import crescentLake from "../../public/crescent_lake_cover.jpeg";
import pda from "../../public/pda_artwork.jpeg";
import unmastered from "../../public/unmastered_artwork.jpeg";
import selfTitled from "../../public/self_titled_artwork.jpeg";
import thistle from "../../public/thistle_album_art.jpeg";
import simultaneity from "../../public/simultaneity cover.jpg";
import mosaic from "../../public/mosaic cover.jpg";

export const releasesData = [
  {
    img: simultaneity,
    url: "https://open.spotify.com/album/1yu1k84kwKuvitIhnyQCUf?si=7d2cb2c37f69464d",
    fresh: true,
  },
  {
    img: mosaic,
    url: "https://open.spotify.com/album/1yu1k84kwKuvitIhnyQCUf?si=7d2cb2c37f69464d",
  },
  {
    img: faulted,
    url: "https://open.spotify.com/track/7M84THJ06PN0VFul8ukDB4?si=899f3c060da1429a",
    fresh: true,
  },
  {
    img: path,
    url: "https://open.spotify.com/track/7M84THJ06PN0VFul8ukDB4?si=899f3c060da1429a",
  },
  {
    img: cast,
    url: "https://open.spotify.com/track/2Ol0DAoXg8unquwUAyFA01?si=34537afeaeb4459d",
  },
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
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {releasesData.map(
          ({ img, url, fresh }, i) =>
            i < displayNumber && (
              <a key={i} href={url} target="_blank">
                <div className="--hover-img relative">
                  <Image src={img} alt="an album cover" placeholder="blur" />
                  {fresh && (
                    <div className="absolute left-0 bottom-0 px-3 py-2 text-white text-xs">
                      new album out everywhere :)
                    </div>
                  )}
                </div>
              </a>
            )
        )}
      </div>
    </div>
  );
}
