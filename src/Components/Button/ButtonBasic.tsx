import Button from "@mui/material/Button";
import { PropsWithChildren } from "react";


interface Props {
  variant?: "text" | "outlined" | "contained";
  label?: React.ReactNode;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean | undefined
  onClick?: () => void;
}

export default function ButtonBasic(props: PropsWithChildren<Props>) {
  return (
    <Button
      onClick={() => {
        //alert("Test");
        if (props.onClick) props.onClick();
      }}
      size="large"
      sx={{
        boxShadow: "none",
        borderRadius: 3,
      }}
      fullWidth={props.fullWidth}
      color={props.color}
      variant={props.variant}
      startIcon={props.startIcon}
      endIcon={props.startIcon}
    >
      {props.label}
    </Button>
  );
}
