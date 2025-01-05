import Stack from "@mui/material/Stack";
import BasicTextFields from "../../Components/Autocomplete/TextField";
import LoginButtons from "../../Components/Button/Big button";
import DividerVariants from "../../Components/Divider/BasicsDivider";

export default function BasicStackSingin() {
  return (
//import Box from "@mui/material/Box";
    <Stack spacing={2} sx={{ p: 0, my: 1 }}>
      <BasicTextFields text="Email" />
      <BasicTextFields text="Пароль" />
      <BasicTextFields text="телефон" />
      <DividerVariants></DividerVariants>
      <LoginButtons>Зарегитрироватся</LoginButtons>
    </Stack>
  );
}
