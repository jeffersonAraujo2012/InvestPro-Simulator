import { TextField, styled } from "@mui/material";
import { TextFieldProps } from "@mui/material";

export default function TextFieldForm(props: TextFieldProps){
  return (
    <CssTextField {...props}/>
  )
}

const CssTextField = styled(TextField)({
  "&": {
    marginBottom: "1.25rem",
  },
  "& *": {
    fontFamily: "'Space Grotesk', sans-serife",
  },
  "&:lastChild": {
    marginBottom: "1.875rem",
  },
  "& input, & label": {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    color: "rgb(23, 37, 84)",
  },
  "& label.Mui-focused": {
    color: "rgb(23, 37, 84)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(23, 37, 84)",
  },
  "&:hover .MuiInput-underline:before": {
    borderColor: "#E0E0E0",
  },
  "& .MuiInput-root::before": {
    borderColor: "#E0E0E0",
  },
});