import moment from "moment";

export interface ShowClass {
  date: string;
  venue: string;
  city: string;
  url: string;
  lineup?: string;
}

export default function Show({ date, venue, city, lineup, url }: ShowClass) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex justify-between items-center uppercase border border-gray-500 p-5 my-5 --hover-btn"
    >
      <div>{moment(date).format("MM.DD.YY")}</div>
      <div>
        {lineup ? <span className="lowercase text-xs">w/</span> : null} {lineup}
      </div>
      <div className="text-right">
        <div>{city}</div>
        <div className="text-xs">{venue}</div>
      </div>
    </a>
  );
}
