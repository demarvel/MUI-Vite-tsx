import { Box } from "@mui/system";
import AppBarSearch from "../Components/AppBar/AppBarSearch";
import TextCaption from "../Components/Typography/TextCaption";

const MainPage = () => {
  return (
    <>
      <AppBarSearch></AppBarSearch>
      <Box sx={{ width: "100%", maxWidth: 500, p:2 }}>
        <TextCaption></TextCaption>
      </Box>
    </>
  );
};

export default MainPage;
