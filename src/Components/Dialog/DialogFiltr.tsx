/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ButtonIcon from "../Button/ButtonIcon";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Stack } from "@mui/system";
import AutocompleteOrder from "../Autocomplete/AutocompleteOrder";
import TextFieldData from "../Text Field/TextFieldData";
import ButtonBasic from "../Button/ButtonBasic";

export default function DialogFiltr() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonIcon icon={<FilterAltIcon />} onClick={handleClickOpen} />
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
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <Stack spacing={0}>
            <AutocompleteOrder label="Статус" />
            <TextFieldData label="Дата начала" />
            <TextFieldData label="Дата окончания" />
            <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 1 }}>
              <ButtonBasic
                onClick={handleClose}
                label="Отмена"
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
