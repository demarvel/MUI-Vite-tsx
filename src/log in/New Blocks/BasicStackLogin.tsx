import Stack from "@mui/material/Stack";
import BasicTextFields from "../../Components/Autocomplete/TextField";
import CheckboxLabels from "../../Components/Checkbox/FormControlLabel";
import LoginButtons from "../../Components/Button/Big button";
import DividerVariants from "../../Components/Divider/BasicsDivider";
import BasicButtons from "../../Components/Button/Basic button";
import FormDialog from "../../Components/Dialog/Dialog";

export default function BasicStackLogin() {
  return (
    <Stack spacing={2} sx={{ p: 0, my: 1 }}>
      <BasicTextFields text="Email" />
      <BasicTextFields text="Пароль" />
      <CheckboxLabels></CheckboxLabels>
      <LoginButtons>вход</LoginButtons>
      <FormDialog></FormDialog>
      <DividerVariants></DividerVariants>
      <BasicButtons variant="outlined">вход без регистрации</BasicButtons>
    </Stack>
  );
}
