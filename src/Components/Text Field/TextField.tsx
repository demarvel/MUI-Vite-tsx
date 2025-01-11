import TextField from "@mui/material/TextField";
import { ReactNode } from "react";

interface Props {
  label?: ReactNode;
}


export default function TextFields(props: React.PropsWithChildren<Props>) {

  return (
    <>
      <TextField
        fullWidth={true}
        id="outlined-basic"
        label={props.label}
        variant="outlined"
      />
    </>
  );
}
