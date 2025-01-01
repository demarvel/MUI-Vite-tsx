import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function LoginButtons() {
  return (
    <Button
      variant="contained"
      size="large"
      fullWidth={true}
      endIcon={<ChevronRightIcon />}
      sx={{
        borderRadius: 3.5,
        height: "3.4rem",
        boxShadow: 7,
        my: 2,
      }}
    >
      Вход
    </Button>
  );
}
