import { Plus } from "lucide-react";

const MoreBtn = (props) => {
  return (
    <div
      id="more"
      className="flex items-center gap-4 bg-gray-300 p-2 rounded-full w-fit m-auto mt-16 opacity-0"
    >
      <p className="pl-3 text-sm md:text-lg font-semibold text-white">
        {props.text}
      </p>
      <button className=" rounded-full bg-blue p-2 text-[#ebeced] hover:text-white">
        <Plus />
      </button>
    </div>
  );
};

export default MoreBtn;
