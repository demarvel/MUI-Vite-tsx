import Button from "@mui/material/Button";
import { ReactNode } from "react";


export default function BasicButtons({
  variant, children}: {  variant: ReactNode;  children: ReactNode;}) {
  return (
    <Button
      onClick={() => {
        alert("Test");
      }}
      size="large"
      sx={{
        boxShadow: "none",
        borderRadius: 3,
      }}
      fullWidth={true}
      color="primary"
      variant={variant}
    >
      {children}
    </Button>
  );
}
