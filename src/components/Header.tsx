import { w } from "windstitch";

export default function Header() {
  return (
    <HeaderStyle>
      <h1>Meus investimentos</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = w.header(`
  fixed
  
  flex
  items-center

  w-full
  h-[5.625rem] 
  pl-14
  
  bg-white 
  border-b-[1px] 
  border-b-[#DADADA]

  [&>h1]:font-['Manrope']
  [&>h1]:font-bold
  [&>h1]:text-[2rem]
  [&>h1]:leading-20
  [&>h1]:text-[#1C1F37]
`);
