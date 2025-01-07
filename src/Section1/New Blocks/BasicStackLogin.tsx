import Stack from "@mui/material/Stack";
import BasicTextFields from "../../Components/Autocomplete/TextField";
import CheckboxLabels from "../../Components/Checkbox/FormControlLabel";
import ButtonBig from "../../Components/Button/ButtonBig";
import DividerVariants from "../../Components/Divider/DividerVariants";
import ButtonBasic from "../../Components/Button/ButtonBasic";
import FormDialog from "../../Components/Dialog/Dialog";

export default function BasicStackLogin() {
  return (
    <Stack spacing={2} sx={{ p: 0, my: 1 }}>
      <BasicTextFields text="Email" />
      <BasicTextFields text="Пароль" />
      <CheckboxLabels></CheckboxLabels>
      <ButtonBig >вход</ButtonBig>
      <FormDialog></FormDialog>
      <DividerVariants></DividerVariants>
      <ButtonBasic variant="outlined">вход без регистрации</ButtonBasic>
    </Stack>
  );
}
