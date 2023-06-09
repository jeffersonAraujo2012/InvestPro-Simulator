import { useNavigate } from "react-router-dom";

interface ISideMenuLink {
  text: string;
  icon: string;
  selected?: boolean;
  to: string;
}

export default function SideMenuLink({ text, icon, selected, to }: ISideMenuLink) {
  const navigate = useNavigate();
  return (
    <div
      className={
        "flex items-center h-14 pl-4 ml-[-1rem] rounded-tl-[8px] rounded-bl-[8px] cursor-pointer " +
        (selected && "bg-[#1B2B65]")
      }
      onClick={() => navigate(to)}
    >
      <span className="flex items-center font-['Space_Grotesk'] font-semibold text-white text-xl">
        <img src={icon} alt={text} className="mr-2 h-6 w-6"/>
        {text}
      </span>
    </div>
  );
}
