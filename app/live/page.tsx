import Image from "next/image";
import Show from "../comps/show";
import live1 from "../../public/manatee commune live holocene.jpg";
import live2 from "../../public/manatee commune live holocene 2.jpg";
import { showData } from "../data/shows";

export default function LivePage() {
  return (
    <div className="--live-page w-full flex flex-col items-center">
      <div className="w-full">
        <div className="w-full relative h-96">
          <Image
            src={live1}
            alt="manatee commune live"
            style={{ objectFit: "cover" }}
            fill
            placeholder="blur"
          />
          {/* <div className="absolute left-0 bottom-0 uppercase px-4 py-2 text-white text-xs">
            <a href="https://poncedeleoncreative.com/" target="_blank">
              by Anthony Ponce de Leon
            </a>
          </div> */}
        </div>
        <div className="w-full relative h-96">
          <Image
            src={live2}
            alt="manatee commune live"
            style={{ objectFit: "cover" }}
            fill
            placeholder="blur"
          />
          {/* <div className="absolute left-0 bottom-0 uppercase px-4 py-2 text-white text-xs">
            <a href="https://poncedeleoncreative.com/" target="_blank">
              by Anthony Ponce de Leon
            </a>
          </div> */}
        </div>
        <div className="">
          {showData.map(({ city, date, venue, lineup, url }, i) => (
            <Show
              city={city}
              date={date}
              venue={venue}
              lineup={lineup}
              key={i}
              url={url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
