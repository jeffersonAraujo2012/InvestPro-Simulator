import { w } from "windstitch"

interface IAsideHeaderProps {
  text: string
}

export default function AsideHeader({text}: IAsideHeaderProps){
  return(
    <AsideHeaderStyle>{text}</AsideHeaderStyle>
  )
}

const AsideHeaderStyle = w.h2(`
  mb-5

  text-[2.5rem]
  leading-[2.875rem]
  text-white
  font-['Manrope','sans-serif']
  font-[800] max-w-[19.375rem]
`)