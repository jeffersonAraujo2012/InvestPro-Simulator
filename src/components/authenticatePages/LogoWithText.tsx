import { w } from "windstitch";
import logo from "../../assets/logo.svg";

export default function LogoWithText() {
  return (
    <LogoStyle>
      <div>
        <img src={logo} alt="logo" />
      </div>
      InvestPRO Simulator
    </LogoStyle>
  );
}

const LogoStyle = w.div(`
  flex 
  items-center 

  text-blue-950 
  text-4xl 
  font-bold 
  font-['Manrope','sans-serif']

  [&>div]:flex 
  [&>div]:justify-center 
  [&>div]:items-center

  [&>div]:w-14 
  [&>div]:h-14 
  [&>div]:mr-3 
  [&>div]:rounded-lg

  [&>div]:bg-blue-950

  [&>div>img]:w-10
  [&>div>img]:h-10
`);
