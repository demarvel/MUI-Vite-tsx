import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ReactNode } from "react";

export default function ButtonBig({ children }: { children?: ReactNode }) {
  return (
    <Button
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
      {children}
    </Button>
  );
}
