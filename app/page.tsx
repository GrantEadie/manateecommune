import Releases from "./comps/releases";
import Show from "./comps/show";
import { showData } from "./data/shows";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Releases />
      <div className="m-5" />
      <div className="w-full flex justify-center">
        <div className="xl:w-3/4 w-full">
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
