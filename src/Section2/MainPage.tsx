import { Box, Stack } from "@mui/system";
import AppBarSearch from "../Components/AppBar/AppBarSearch";
import TextCaption from "../Components/Typography/TextCaption";
import AccordionMainPage from "../Components/Accordion/AccordionMainPage";

const MainPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, }} >
        <AppBarSearch />
      </Box>
      <Box sx={{ width: "100%", mt: 2, ml:2 }}>
        <TextCaption label="Заказы" />
      </Box>
      <Stack spacing={1} sx={{ width: "100%", mt: 0,  }}>
      <AccordionMainPage/>
      <AccordionMainPage/>
      </Stack>
    </>
  );
};

export default MainPage;
