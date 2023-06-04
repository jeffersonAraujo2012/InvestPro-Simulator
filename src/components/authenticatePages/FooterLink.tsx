import { w } from "windstitch";

interface IFooterLinkProps {
  description: string;
  link?: string;
  textLink: string;
}

export default function FooterLink({
  description,
  link = "#",
  textLink,
}: IFooterLinkProps) {
  return (
    <FooterLinkStyle>
      {description}
      <a href={link}>{textLink}</a>
    </FooterLinkStyle>
  );
}

const FooterLinkStyle = w.p(`
  text-blue-950
  text-center
  text-lg
  cursor-default

  [&>a]:font-medium
  hover:[&>a]:underline
`);
