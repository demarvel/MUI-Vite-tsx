//import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import BasicTextFields from "../../Components/Autocomplete/TextField";
import CheckboxLabels from "../../Components/Checkbox/FormControlLabel";
import LoginButtons from "../../Components/Button/Big button";
import DividerVariants from "../../Components/Divider/BasicsDivider";
//import Types from "../../Components/Typography/Body1";
import BasicButtons from "../../Components/Button/Basic button";
//import AlertDialog from "../../Components/Dialog/Dialog";
import FormDialog from "../../Components/Dialog/Dialog";

export default function BasicStackLogin() {
  return (
    <Stack spacing={2} sx={{ p: 2, my: 2 }}>
      <BasicTextFields text="Email" />
      <BasicTextFields text="Пароль" />
      <CheckboxLabels></CheckboxLabels>
      <LoginButtons>вход</LoginButtons>
      <FormDialog></FormDialog>
      <DividerVariants></DividerVariants>
      <BasicButtons variant="outlined">попробывать без регистрации</BasicButtons>
    </Stack>
  );
}
