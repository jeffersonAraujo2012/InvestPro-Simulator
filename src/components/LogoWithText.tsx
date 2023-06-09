import { w } from "windstitch";
import logo from "../assets/logo.svg";

interface ILogoWithTextProps {
  twBgColor?: string;
  customText?: string;
  othersCustomStyle?: string;
  short?: boolean;
}

export default function LogoWithText({
  twBgColor,
  customText,
  othersCustomStyle,
  short,
}: ILogoWithTextProps) {
  return (
    <LogoStyle className={othersCustomStyle} short={short}>
      <div className={twBgColor}>
        <img src={logo} alt="logo" />
      </div>
      {customText ? customText : "InvestPRO Simulator"}
    </LogoStyle>
  );
}

const LogoStyle = w.div(
  `
  flex 
  items-center 

  text-blue-950 
  text-4xl 
  font-bold 
  font-['Manrope','sans-serif']

  [&>div]:flex 
  [&>div]:justify-center 
  [&>div]:items-center
  [&>div]:shrink-0

  [&>div]:w-14 
  [&>div]:h-14 
  [&>div]:mr-3 
  [&>div]:rounded-lg

  [&>div]:bg-blue-950

  [&>div>img]:w-10
  [&>div>img]:h-10
`,
  {
    variants: {
      short: (yes: boolean) =>
        yes ? "[&>div]:w-10 [&>div]:h-10 [&>div>img]:w-7 [&>div>img]:h-7 !text-2xl" : "",
    },
    defaultVariants: {
      short: false,
    },
  }
);
