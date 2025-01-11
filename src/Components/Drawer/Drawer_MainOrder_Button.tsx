import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Stack } from "@mui/system";
import ButtonBasic from "../Button/ButtonBasic";
import ButtonFAB_MainOrder from "../Button/ButtonFAB_MainOrder";
import TextFields from "../Text Field/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Button_Drawer from "../Button/Button_Drawer";
import DoneIcon from '@mui/icons-material/Done';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Drawer_MainOrder_Button() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={1} sx={{ pt: 0, pb: 3 }}>
        <TextFields label="Ширина в см." />
        <Box sx={{ pt: 2 }}>
          <CloseIcon />
        </Box>
        <TextFields label="Высота в см." />
      </Stack>
      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <Button_Drawer label="Без отверстий" variant="outlined" />
          <Button_Drawer label="Ящик" variant="outlined" />
          <Button_Drawer label="Дверка" variant="contained" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button_Drawer label="Вертикальная" variant="outlined" />
          <Button_Drawer label="Горизонтальная" variant="contained" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button_Drawer label="Левая" variant="outlined" />
          <Button_Drawer label="Правая" variant="contained" />
        </Stack>
        <Stack direction="row" spacing={1} sx={{pb:2}}>
          <Button_Drawer label="Ручка снизу" variant="outlined" />
          <Button_Drawer label="Ручка сверху" variant="contained" />
        </Stack>

        <ButtonBasic label="Посмотреть отверстия" variant="outlined" startIcon={<VisibilityIcon/>} />
        <ButtonBasic label="Подтвердить" variant="contained" startIcon={<DoneIcon/>} />
      </Stack>
    </Box>
  );

  return (
    <div>
      <ButtonFAB_MainOrder onClick={toggleDrawer(true)} />
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
