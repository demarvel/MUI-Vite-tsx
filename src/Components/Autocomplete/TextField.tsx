import TextField from "@mui/material/TextField";
import { ReactNode } from "react";

export default function BasicTextFields({ text } : {text?: ReactNode} ) {

  
  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label={text}
        variant="outlined"
      />
    </>
  );
}
