import TextField from "@mui/material/TextField";
import { ReactNode } from "react";

export default function TextFields({ label } : {label?: ReactNode} ) {

  
  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    </>
  );
}
