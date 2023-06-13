interface IStockGraphBtn {
  text: string;
  onClick: () => void;
  className: string;
  classNameSelected?: string;
  selected?: boolean;
}

export default function StockGraphBtn({
  text,
  className,
  onClick,
  selected,
  classNameSelected,
}: IStockGraphBtn) {

  return (
    <button
      className={"py-2 px-3 rounded-[100px] " + (selected ? classNameSelected : className)}
      onClick={onClick}
    >
      <p className="flex items-center font-['Manrope'] text-lg font-semibold">
        {text}
      </p>
    </button>
  );
}
