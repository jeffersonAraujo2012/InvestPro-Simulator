import LogoWithText from "../../components/authenticatePages/LogoWithText";
import FooterLink from "../../components/authenticatePages/FooterLink";
import SigninForm from "./SigninForm";
import { w } from "windstitch";
import AsideHeader from "../../components/authenticatePages/AsideHeader";
import AsideText from "../../components/authenticatePages/AsideText";

export default function Signin() {
  return (
    <div className="flex bg-signin bg-cover w-full h-screen">
      <Aside>
        <AsideHeader text="Para que se arriscar?" />
        <AsideText text="Simule gratuitamente suas estratégias de investimento" />
      </Aside>

      <Main>
        <LogoWithText />

        <SigninForm />

        <FooterLink
          description="Não tem uma conta ainda? "
          textLink="Cadastre-se de graça"
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
