import { w } from "windstitch";
import logo from "../../assets/logo.svg";

interface ILogoProps {
  twBgColor?: string;
}

export default function Logo({ twBgColor }: ILogoProps) {
  return (
    <LogoStyle className={twBgColor}>
      <img src={logo} alt="logo" />
    </LogoStyle>
  );
}

const LogoStyle = w.div(`
  flex 
  justify-center 
  items-center

  w-14 
  h-14 
  mr-3 
  rounded-lg

  [&>img]:w-10
  [&>img]:h-10
`);
