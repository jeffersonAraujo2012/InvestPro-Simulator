import { w } from "windstitch";

interface ITitleAuthFormProps {
  text: string;
}

export default function TitleAuthForm({ text }: ITitleAuthFormProps) {
  return <TitleAuthFormStyle>{text}</TitleAuthFormStyle>;
}

const TitleAuthFormStyle = w.h1(`
  mb-1

  text-[2.5rem]
  leading-[3.0625rem] 
  font-extrabold 
  text-blue-950 
  font-['Manrope']
`);
