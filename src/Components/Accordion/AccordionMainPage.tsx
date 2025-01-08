import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box, Stack } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { lightBlue } from "@mui/material/colors";
import ButtonBasic from "../Button/ButtonBasic";
//import DividerVariants from "../Divider/DividerVariants";

export default function AccordionMainPage() {
  return (
    <div>
      <Accordion
        sx={{
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Avatar sx={{ bgcolor: lightBlue[100] }}>
            <FolderIcon color="primary" />
          </Avatar>
          <Typography sx={{ mt: 1, ml: 2 }}>Заказ:</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            boxShadow: 6,
            bgcolor: lightBlue[100],
            mt: 1,
            mb: 1,
            ml: 0,
            borderRadius: 5,
          }}
        >
          <Box
            sx={{
              bgcolor: lightBlue[50],
              mt: 1,
              pt: 0.5,
              pb: 1.5,
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2,  }}>Статус:</Typography>
          </Box>
          <Box
            sx={{
              bgcolor: lightBlue[50],
              mt: 1,
              pt: 0.5,
              pb: 1.5,
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>Дата :</Typography>
          </Box>
          <Box
            sx={{
              bgcolor: lightBlue[50],
              mt: 1,
              mb: 1,
              pt: 0.5,
              pb: 1.5,
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>Цена :</Typography>
          </Box>
          {/* <DividerVariants/> */}
          <Stack direction="row" spacing={2} sx={{ pt: 2,  }}>
          <ButtonBasic label="удалить" variant="outlined" color="error" />
          <ButtonBasic label="изменить" variant="contained" />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
