import { IconButton } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  color?: | "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  icon?: React.ReactNode;
  onClick?: () => void;
}
const ButtonIcon = (props: PropsWithChildren<Props>) => {
  return (
    <IconButton
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      size="large"
      edge="start"
      color={props.color}
      aria-label="open drawer"
    >
      {props.icon}
    </IconButton>
  );
};

export default ButtonIcon;
