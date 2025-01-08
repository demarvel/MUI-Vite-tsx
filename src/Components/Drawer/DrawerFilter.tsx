import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Stack } from "@mui/system";
import ButtonIcon from "../Button/ButtonIcon";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Typography } from "@mui/material";
import ButtonBasic from "../Button/ButtonBasic";
import TextFieldData from "../Text Field/TextFieldData";
import AutocompleteOrder from "../Autocomplete/AutocompleteOrder";

export default function DrawerFilter() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = ( 
    <Box  sx={{ p: 2 }}>
      <Box sx={{ p: 1 }}>
        <Typography variant="h6" gutterBottom>
          Фильтр
        </Typography>
      </Box>
      <Stack spacing={1}>
        <AutocompleteOrder label="Статус"/>
        <TextFieldData label="Дата начала" />
        <TextFieldData label="Дата окончания" />
        <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 1 }}>
          <ButtonBasic label="Подтвердить" variant="contained" />
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <div>
      <ButtonIcon icon={<FilterAltIcon />} onClick={toggleDrawer(true)} />
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
