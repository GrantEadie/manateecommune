import { space } from "../fonts";

export default function Nav() {
  return (
    <div className="p-10 flex justify-center w-full">
      <div className="xl:w-3/4 w-full flex items-end justify-between">
        <div className={`${space.className} text-5xl`}>
          MANATEE <br /> COMMUNE
        </div>
        <div className="flex uppercase">
          <div className="">live</div>
          <div className="pl-10">releases</div>
          <div className="pl-10">person</div>
        </div>
      </div>
    </div>
  );
}
