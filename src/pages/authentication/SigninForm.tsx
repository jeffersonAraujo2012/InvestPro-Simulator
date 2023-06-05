import { Button, styled } from "@mui/material";
import DescriptionAuthForm from "../../components/form/DescriptionAuthForm";
import TextFieldForm from "../../components/form/TextFieldForm";
import TitleAuthForm from "../../components/form/TitleAuthForm";
import { FormEvent, useContext, useState } from "react";
import api from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserProvider";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [_, setUserData] = useContext(UserContext);

  async function login(e: FormEvent) {
    e.preventDefault();

    try {
      const signinResult = await toast.promise(
        api.post("/auth/sign-in", {
          email,
          password,
        }),
        {
          pending: "Entrando...",
          success: "Bem-vindo!",
          error: "Alguma coisa deu errado.",
        }
      );

      const userData = signinResult.data;
      setUserData(userData);

      navigate("/dashboard");
    } catch (error) {
      //console.log(error);
    }
  }

  return (
    <form className="flex flex-col" onSubmit={login}>
      <TitleAuthForm text="Login" />
      <DescriptionAuthForm text="Bem vindo de volta! Entre com seus dados." />

      <TextFieldForm
        variant="standard"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />
      <TextFieldForm
        className="!mb-8"
        variant="standard"
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />

      <ColorButton
        className="!h-[3.75rem] !mb-4 !text-[1.25rem]"
        size="large"
        type="submit"
      >
        Entrar
      </ColorButton>
      <RegisterButton
        className="!h-[3.75rem] !text-[1.25rem]"
        size="large"
        variant="outlined"
      >
        Registrar
      </RegisterButton>
    </form>
  );
}

const ColorButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Space Grotesk', sans-serif",
  color: theme.palette.getContrastText("rgb(23, 37, 84)"),
  backgroundColor: "rgb(23, 37, 84)",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgb(21, 34, 76)",
  },
}));

const RegisterButton = styled(Button)(() => ({
  fontFamily: "'Space Grotesk', sans-serif",
  color: "rgb(23, 37, 84)",
  borderColor: "rgb(23, 37, 84)",
  textTransform: "none",
}));
