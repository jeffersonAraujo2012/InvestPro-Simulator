import graphIcon from "../assets/graphIcon.svg";

interface IDashboardItemHeader {
  text: string;
}

export default function DashboardItemHeader({ text }: IDashboardItemHeader) {
  return (
    <div className="flex items-center py-4 px-6 border-b-[1px] border-b-[#DADADA]">
      <img src={graphIcon} alt="grafico" className="mr-4" />
      <p className="font-['Manrope'] font-bold text-2xl leading-7 text-[#1C1F37]">
        {text}
      </p>
    </div>
  );
}
