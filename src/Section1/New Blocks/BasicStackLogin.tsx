import Stack from "@mui/material/Stack";
import CheckboxLabels from "../../Components/Checkbox/CheckboxLabels";
import ButtonBig from "../../Components/Button/ButtonBig";
import DividerVariants from "../../Components/Divider/DividerVariants";
import ButtonBasic from "../../Components/Button/ButtonBasic";
import FormDialog from "../../Components/Dialog/Dialog";
import TextFieldRequired from "../../Components/Text Field/TextFieldRequired";
import TextFieldPassword from "../../Components/Text Field/TextFieldPassword";

export default function BasicStackLogin() {
  return (
    <Stack spacing={2} sx={{ p: 0, my: 1 }}>
      <TextFieldRequired label="Email" />
      <TextFieldPassword label="Пароль" />
      <CheckboxLabels />
      <ButtonBig label="вход" />
      <FormDialog />
      <DividerVariants />
      <ButtonBasic variant="outlined" label="вход без регистрации" />
    </Stack>
  );
}
