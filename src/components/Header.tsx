import { w } from "windstitch";

interface IHeader {
  title: string;
}

export default function Header({title}: IHeader) {
  return (
    <HeaderStyle>
      <h1>{title}</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = w.header(`
  fixed
  
  flex
  items-center
  justify-between

  h-[5.625rem] 
  pl-14
  header-full-width
  
  bg-white
  border-b-[1px] 
  border-b-[#DADADA]
  z-10

  [&>h1]:font-['Manrope']
  [&>h1]:font-bold
  [&>h1]:text-[2rem]
  [&>h1]:leading-20
  [&>h1]:text-[#1C1F37]
`);
