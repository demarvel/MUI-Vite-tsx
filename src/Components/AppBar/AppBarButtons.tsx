import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ButtonBasic from "../Button/ButtonBasic";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from '@mui/icons-material/Send';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          //pb: 1,
          //pt: 1,
          boxShadow: 0,
          borderRadius: "50px",
          color: "black",
          bgcolor: "white",
          
        }}
      >
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, boxShadow: 0, border: 1, borderColor: 'grey.300' }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <ButtonBasic />
          <Button
            size="large"
            sx={{
              boxShadow: 3,
              borderRadius: 3,
            }}
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Отправить
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
