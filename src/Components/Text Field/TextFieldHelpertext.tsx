import TextField from "@mui/material/TextField";
import { PropsWithChildren } from "react";

interface Props {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
}

export default function TextFieldHelpertext(props: PropsWithChildren<Props>) {
  return (
    <>
      <TextField
        fullWidth
        helperText={props.helperText}
        id="demo-helper-text-misaligned"
        label={props.label}
      />
    </>
  );
}
