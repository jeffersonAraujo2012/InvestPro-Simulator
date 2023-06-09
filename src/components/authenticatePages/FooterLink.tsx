import { useNavigate } from "react-router-dom";
import { w } from "windstitch";

interface IFooterLinkProps {
  description: string;
  link?: string;
  textLink: string;
  internalLink?: string;
}

export default function FooterLink({
  description,
  link = "#",
  textLink,
  internalLink,
}: IFooterLinkProps) {
  const navigate = useNavigate();
  return (
    <FooterLinkStyle>
      {description}
      {internalLink ? (
        <span onClick={() => navigate(internalLink)}>{textLink}</span>
      ) : (
        <a href={link}>{textLink}</a>
      )}
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

  [&>span]:font-medium
  [&>span]:cursor-pointer
  hover:[&>span]:underline
`);
