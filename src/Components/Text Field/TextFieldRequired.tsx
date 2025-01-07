import TextField from "@mui/material/TextField";
import { PropsWithChildren } from "react";

interface Props {
  label?: React.ReactNode;
}

export default function TextFieldRequired(props: PropsWithChildren<Props>) {
  return (
    <>
      <TextField
        fullWidth
        required
        id="standard-required"
        label={props.label}
        //defaultValue="Hello World"
        // variant="standard
      />
    </>
  );
}
