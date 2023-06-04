import { w } from "windstitch";

interface IDescriptionAuthFormProps {
  text: string;
}

export default function DescriptionAuthForm({
  text,
}: IDescriptionAuthFormProps) {
  return <DescriptionAuthFormStyle>{text}</DescriptionAuthFormStyle>;
}

const DescriptionAuthFormStyle = w.p(`
  mb-8

  text-blue-950
  text-xl
`);
