import { Button } from "@mui/material";
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

export default function Button_Drawer(props: PropsWithChildren<Props>) {
  return (
    <Button
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      size="large"
      sx={{
        fontSize: 12,
        //boxShadow: 0,
        borderRadius: 4,
        pt: 1.5,
        pb: 1.5,
        minHeight: 70
        
      }}
      
      fullWidth={true}
      color="inherit"
      variant={props.variant}
      startIcon={props.startIcon}
      endIcon={props.startIcon}
    >
      {props.label}
    </Button>
  );
}
