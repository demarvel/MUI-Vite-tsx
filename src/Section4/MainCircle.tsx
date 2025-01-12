import { Box, Stack } from "@mui/system";
import AppBar_MainCircle from "../Components/AppBar/AppBar_MainCircle";
import Button_Circle_Panel from "../Components/Button/Button_Circle_Panel";
import { CardMedia, Paper } from "@mui/material";

const MainCircle = () => {
  return (
    <>
      <AppBar_MainCircle />
      <Stack direction="row" spacing={1} sx={{ pt: 2 }}>
        <Button_Circle_Panel label="Панель" variant="contained" />
        <Button_Circle_Panel label="Петля 1" variant="outlined" />
        <Button_Circle_Panel label="Петля 2" variant="outlined" />
        <Button_Circle_Panel label="Петля 3" variant="outlined" />
      </Stack>

      <Box
        //dir="rtl"
        sx={{
          display: "flex",
        }}
      >
        <Paper sx={{ p: 2, width: "100%", height: 280, m: 6 }} elevation={7}>
          <CardMedia
            dir="rtl"
            component="img"
            image="/Circle2.png"
            sx={{ height: 70, width: 70 }}
            //alt="green iguana"
          />
        </Paper>
      </Box>
    </>
  );
};

export default MainCircle;
