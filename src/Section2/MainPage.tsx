import { Box, Stack } from "@mui/system";
import AppBarSearch from "../Components/AppBar/AppBarSearch";
import TextCaption from "../Components/Typography/TextCaption";
import AccordionMainPage from "../Components/Accordion/AccordionMainPage";

export default function MainPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarSearch />
      </Box>
      <Box sx={{ width: "100%", mt: 2, ml: 2 }}>
        <TextCaption label="Заказы" />
      </Box>
      <Stack spacing={1} sx={{ width: "100%", mt: 0 }}>
        <AccordionMainPage
          labelOrder="96849947"
          labelStatus="обрабатывается"
          labelData="19/01/2024"
          labelPrice="13 250 руб."
        />
        <AccordionMainPage
          labelOrder="56139947"
          labelStatus="готов"
          labelData="21/01/2024"
          labelPrice="15 650 руб."
        />
      </Stack>
    </>
  );
}
