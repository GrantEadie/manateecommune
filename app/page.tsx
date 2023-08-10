import Releases from "./comps/releases";
import Show from "./comps/show";
import { showData } from "./data/shows";

export default function Home() {
  return (
    <div className="px-10 pb-10 flex flex-col items-center w-full">
      <Releases />
      <div className="m-5" />
      <div className="w-full flex justify-center">
        <div className="xl:w-3/4 w-full">
          {showData.map(({ city, date, venue, lineup }, i) => (
            <Show
              city={city}
              date={date}
              venue={venue}
              lineup={lineup}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
