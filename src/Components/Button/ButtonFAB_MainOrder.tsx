import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  // variant?: "text" | "outlined" | "contained";
  // label?: React.ReactNode;
  // color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
  // startIcon?: React.ReactNode;
  // endIcon?: React.ReactNode;
  // fullWidth?: boolean | undefined
  onClick?: () => void;
}

export default function ButtonFAB_MainOrder(props: PropsWithChildren<Props>) {
  return (
    <Button
      onClick={() => {
        //alert("Test");
        if (props.onClick) props.onClick();
      }}
      variant="contained"
      size="large"
      startIcon={<AddIcon />}
      sx={{
        boxShadow: 6,
        borderRadius: 4,
        pt: 2,
        pb: 2,
        pl: 3,
        pr: 3,
        position: "absolute",
        bottom: 16,
        right: 16,
      }}
    >
      Добавить
    </Button>
  );
}
