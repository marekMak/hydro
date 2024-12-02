import { twMerge } from "tailwind-merge";
import Graph from "./Graph";

export default function Intake({
  title,
  percentage,
  milliliters,
  className,
  colour,
}) {
  return (
    <div
      className={twMerge(
        "py-5 px-2 rounded-xl flex items-start justify-start pl-6 gap-4",
        className
      )}
    >
      <div className="flex items-center justify-center h-10 gap-10">
        <Graph percentage={percentage} colour={colour} />
      </div>
      <div>
        <h2>{title}</h2>
        <span className="font-bold">{milliliters} ml</span>
      </div>
    </div>
  );
}
