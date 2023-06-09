import LogoWithText from "./LogoWithText";
import SideMenuLink from "./SideMenuLink";

import iconWallet from "../assets/wallet_alt.svg";
import iconRentability from "../assets/chart_alt.svg";

export default function SideMenu() {
  return (
    <div className="w-[17rem] h-full pt-6 pl-8 pb-10 bg-[#081A51]">
      <LogoWithText
        short
        twBgColor="!bg-blue-600"
        customText="InvestPRO"
        othersCustomStyle="text-2xl font-extrabold text-white mb-14"
      />

      <SideMenuLink text="Carteira" icon={iconWallet} selected />
      <SideMenuLink text="Rentabilidade" icon={iconRentability} />
      <SideMenuLink text="Investir" icon={iconRentability} />
    </div>
  );
}
