import Stack from "@mui/material/Stack";
import TextFields from "../../Components/Text Field/TextField";
import ButtonBig from "../../Components/Button/ButtonBig";
import DividerVariants from "../../Components/Divider/DividerVariants";
//import TextFieldHelpertext from "../../Components/Text Field/TextFieldHelpertext";
import TextFieldPassword from "../../Components/Text Field/TextFieldPassword";
import TextFieldRequired from "../../Components/Text Field/TextFieldRequired";

export default function BasicStackSingin() {
  return (
    <Stack spacing={2} sx={{ p: 0, my: 1 }}>
      <TextFieldRequired label="Email" />
      <TextFields label="Телефон" />
      <TextFieldPassword
        label="Пароль"
        Helpertext="Не менее 6 знаков и одной цифры"
      />
      <TextFieldPassword
        label="Повторите пароль"
        Helpertext="Не менее 6 знаков и одной цифры"
      />
      <DividerVariants />
      <ButtonBig label="Зарегитрироватся" />
    </Stack>
  );
}
