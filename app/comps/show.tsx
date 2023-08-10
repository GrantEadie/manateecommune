import moment from "moment";

export interface ShowClass {
  date: string;
  venue: string;
  city: string;
  lineup?: string;
}

export default function Show({ date, venue, city, lineup }: ShowClass) {
  return (
    <div className="flex justify-between uppercase border-b border-gray-500 p-5 my-2 --hover">
      <div>{moment(date).format("MM.DD.YY")}</div>
      <div>
        {lineup ? <span className="lowercase text-xs">w/</span> : null} {lineup}
      </div>
      <div className="text-right">
        <div>{city}</div>
        <div className="text-xs">{venue}</div>
      </div>
    </div>
  );
}
