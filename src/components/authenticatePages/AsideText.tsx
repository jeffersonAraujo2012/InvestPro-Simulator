import { w } from "windstitch"

interface IAsideTextProps {
  text: string;
}

export default function AsideText({text}: IAsideTextProps) {
  return(
    <AsideTextStyle>{text}</AsideTextStyle>
  )
}

const AsideTextStyle = w.p(`
  text-[1.25rem]
  leading-[1.6875rem]
  text-white font-['Manrope','sans-serif']
  font-[600]
`)