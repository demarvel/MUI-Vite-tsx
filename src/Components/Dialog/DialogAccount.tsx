/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonIcon from "../Button/ButtonIcon";
import { Stack } from "@mui/system";
import ButtonBasic from "../Button/ButtonBasic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextFieldRequired from "../Text Field/TextFieldRequired";
import TextFieldPassword from "../Text Field/TextFieldPassword";
import TextFields from "../Text Field/TextField";

export default function DialogAccount() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonIcon icon={<AccountCircleIcon />} onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Фильтр</DialogTitle>

        <DialogContent dividers>
          <Stack spacing={1}>
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
            <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 1 }}>
              <ButtonBasic
                onClick={handleClose}
                label="Выход"
                variant="outlined"
              />
              <ButtonBasic label="ок" variant="contained" />
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
