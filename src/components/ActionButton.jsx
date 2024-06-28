const ActionButton = ({ icon: Icon, text, handleClick, ...props }) => {
  return (
    <button
      className={`text-md overflow-visible whitespace-nowrap text-gray font-semibold mb-2 px-3 py-2  w-max rounded-full flex hover:text-white hover:bg-[#212121] ${props.className}`}
      onClick={handleClick}
    >
      {" "}
      <span className="mr-2">
        <Icon size={25} />
      </span>
      {text}
    </button>
  );
};

export default ActionButton;
