import Stack from "@mui/material/Stack";
import CheckboxLabels from "../Checkbox/CheckboxLabels";
import ButtonBig from "../Button/ButtonBig";
import DividerVariants from "../Divider/DividerVariants";
import ButtonBasic from "../Button/ButtonBasic";
import FormDialog from "../Dialog/DialogPasswordReset";
import TextFieldRequired from "../Text Field/TextFieldRequired";
import TextFieldPassword from "../Text Field/TextFieldPassword";

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
