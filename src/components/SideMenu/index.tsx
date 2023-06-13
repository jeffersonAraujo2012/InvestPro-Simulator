import LogoWithText from "../LogoWithText";
import SideMenuLink from "./SideMenuLink";

import iconWallet from "../../assets/wallet_alt.svg";
import iconRentability from "../../assets/chart_alt.svg";
import { useLocation } from "react-router-dom";

export default function SideMenu() {
  const location = useLocation();

  return (
    <div className="w-[17rem] h-full pt-6 pl-8 pb-10 bg-[#081A51] shrink-0">
      <LogoWithText
        short
        twBgColor="!bg-blue-600"
        customText="InvestPRO"
        othersCustomStyle="text-2xl font-extrabold text-white mb-14"
      />

      <SideMenuLink
        text="Carteira"
        icon={iconWallet}
        to="/dashboard"
        selected={location.pathname === "/dashboard"}
      />
      <SideMenuLink
        text="Rentabilidade"
        icon={iconRentability}
        to="/rentability"
        selected={location.pathname === "/rentability"}
      />
      <SideMenuLink
        text="Investir"
        icon={iconRentability}
        to="/invest"
        selected={location.pathname === "/invest"}
      />
    </div>
  );
}
