import Button from "@mui/material/Button";
import { PropsWithChildren } from "react";


interface Props {
  variant?: "text" | "outlined" | "contained";
  label?: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonBasic(props: PropsWithChildren<Props>) {
  return (
    <Button
      onClick={() => {
        alert("Test");
        if (props.onClick) props.onClick();
      }}
      size="large"
      sx={{
        boxShadow: "none",
        borderRadius: 3,
      }}
      fullWidth={true}
      color="primary"
      variant={props.variant}
    >
      {props.label}
    </Button>
  );
}
