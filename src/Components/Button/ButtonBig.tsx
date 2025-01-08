import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { PropsWithChildren } from "react";

interface Props {
  label?: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonBig(props: PropsWithChildren<Props>) {
  return (
    <Button
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      variant="contained"
      size="large"
      fullWidth={true}
      endIcon={<ChevronRightIcon />}
      sx={{
        borderRadius: 15,
        height: "3.4rem",
        boxShadow: 7,
        top: 0,
      }}
    >
      {props.label}
    </Button>
  );
}
