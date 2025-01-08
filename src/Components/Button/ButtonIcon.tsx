import { IconButton } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
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
      color="inherit"
      aria-label="open drawer"
    >
      {props.icon}
    </IconButton>
  );
};

export default ButtonIcon;
