import drop from "/images/aside/drop.png";
import vector from "/images/aside/vector.png";
import vector21 from "/images/aside/vector21.png";
import vector24 from "/images/aside/vector24.png";
import vector25 from "/images/aside/vector25.png";

const Goal = () => {
  return (
    <div className="gap-4 bg-blue-goal rounded-lg w-full py-8 flex flex-col pl-6 text-white relative">
      <h2>Intake Goal</h2>
      <span className="font-bold">18000 ml / 25000 ml</span>
      <img src={drop} alt="water drop" className="absolute top-7 right-10" />
      <img src={vector} alt="vector image" className="absolute left-3 top-0" />
      <img
        src={vector21}
        alt="vector image"
        className="absolute left-2 top-0"
      />
      <img
        src={vector24}
        alt="vector image"
        className="absolute right-0 bottom-2"
      />
      <img
        src={vector25}
        alt="vector image"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Goal;
