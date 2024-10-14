import { RxCrossCircled } from "react-icons/rx";

export default function wheelItem() {
  return (
    <div className="flex items-center gap-2 m-2">
      <li className="bg-red_400 text-red_900 text-xs md:text-sm lg:text-lg font-main border-red_800 px-3 py-1 w-fit rounded-full focus:outline-none">
        Number 001
      </li>
      <RxCrossCircled className="text-red_800 size-5" />
    </div>
  );
}
