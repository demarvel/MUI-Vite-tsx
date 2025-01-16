import { Box, Stack } from "@mui/system";
import AppBarSearch from "../Components/AppBar/AppBarSearch";
import TextCaption from "../Components/Typography/TextCaption";
import Accordion_MainPage from "../Components/Accordion/Accordion_MainPage";
import ButtonFAB_MainPage from "../Components/Button/ButtonFAB_MainPage";
import Portal from "../Components/Test/Portal";
import { Button } from "@mui/material";









export default function MainPage() {
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarSearch />
      </Box>

      
      <Box sx={{ width: "100%", mt: 2, ml: 2 }}>
        <TextCaption label="Заказы" />
      </Box>
      <Portal/>

      {/* тестовый стек */}

      <Stack spacing={1} sx={{ width: "100%", mt: 0 }}>
        <Accordion_MainPage
          labelOrder="96849947"
          labelStatus="обрабатывается"
          labelData="19/01/2024"
          labelPrice="13 250 руб."
        />
      </Stack>
      <Button variant="contained" component={Portal} >dd</Button>
      <ButtonFAB_MainPage/>
    </>
  );
}
