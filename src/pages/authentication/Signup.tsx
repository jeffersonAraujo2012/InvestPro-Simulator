import LogoWithText from "../../components/authenticatePages/LogoWithText";
import FooterLink from "../../components/authenticatePages/FooterLink";
import { w } from "windstitch";
import AsideHeader from "../../components/authenticatePages/AsideHeader";
import AsideText from "../../components/authenticatePages/AsideText";
import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <div className="flex bg-signin bg-cover w-full h-screen">
      <Aside>
        <AsideHeader text="Valide suas técnicas" />
        <AsideText text="Teste em um ambiente seguro suas estratégias de investimento" />
      </Aside>

      <Main>
        <LogoWithText />

        <SignupForm />

        <FooterLink
          description="Já tem uma conta? "
          textLink="Ir para login"
          internalLink="/"
        />
      </Main>
    </div>
  );
}

const Main = w.main(`
  flex 
  flex-col 
  justify-between 
  
  h-full
  w-6/12 
  pl-32 
  pr-44 
  py-20 
  
  bg-neutral-50
`);

const Aside = w.aside(`
  flex 
  flex-col 
  justify-end 
  
  w-6/12 
  h-full 
  pl-[3.75rem] 
  pr-[7.50rem] 
  pb-[4.75rem]
`);
