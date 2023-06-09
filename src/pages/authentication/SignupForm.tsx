import { Button, styled } from "@mui/material";
import DescriptionAuthForm from "../../components/form/DescriptionAuthForm";
import TextFieldForm from "../../components/form/TextFieldForm";
import TitleAuthForm from "../../components/form/TitleAuthForm";
import { FormEvent, useState } from "react";
import api from "../../api";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signup(e: FormEvent) {
    e.preventDefault();

    try {
      const signunResult = await api.post("/auth/sign-up", {
        name,
        email,
        password,
        confirmPassword,
      });
      const userData = signunResult.data;
      console.log(userData);
    } catch (error) {}
  }

  return (
    <form className="flex flex-col" onSubmit={signup}>
      <TitleAuthForm text="Crie sua conta" />
      <DescriptionAuthForm text="Seja bem vindo à nossa plataforma gratuita" />

      <TextFieldForm
        variant="standard"
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        required
      />
      <TextFieldForm
        variant="standard"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />
      <TextFieldForm
        variant="standard"
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />
      <TextFieldForm
        className="!mb-8"
        variant="standard"
        label="Confirme sua senha"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        required
      />

      <ColorButton
        className="!h-[3.75rem] !mb-4 !text-[1.25rem]"
        size="large"
        type="submit"
      >
        Registrar
      </ColorButton>
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
