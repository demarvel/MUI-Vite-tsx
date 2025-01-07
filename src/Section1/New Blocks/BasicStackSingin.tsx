import Stack from "@mui/material/Stack";
import BasicTextFields from "../../Components/Autocomplete/TextField";
import ButtonBig from "../../Components/Button/ButtonBig";
import DividerVariants from "../../Components/Divider/DividerVariants";

export default function BasicStackSingin() {
  return (
//import Box from "@mui/material/Box";
    <Stack spacing={2} sx={{ p: 0, my: 1 }}>
      <BasicTextFields text="Email" />
      <BasicTextFields text="Пароль" />
      <BasicTextFields text="Телефон" />
      <DividerVariants></DividerVariants>
      <ButtonBig>Зарегитрироватся</ButtonBig>
    </Stack>
  );
}
