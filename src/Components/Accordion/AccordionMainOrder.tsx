import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box, Stack } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { blue } from "@mui/material/colors";
import ButtonBasic from "../Button/ButtonBasic";
import { PropsWithChildren } from "react";
import DialogDelite from "../Dialog/DialogDelite";

interface Props {
  labelOrder?: React.ReactNode;
  labelStatus?: "обрабатывается" | "в работе" | "готов";
  labelData?: React.ReactNode;
  labelPrice?: React.ReactNode;
}

export default function AccordionMainOrder(props: PropsWithChildren<Props>) {
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
          <Avatar sx={{ bgcolor: blue[100] }}>
            <FolderIcon color="primary" />
          </Avatar>
          <Typography sx={{ mt: 1, ml: 2 }}>Заказ: {props.labelOrder}</Typography>
        </AccordionSummary>
        
        <AccordionDetails
        //Основной компонент
          sx={{
            boxShadow: 6,
            bgcolor: blue[100],
            mt: 1,
            mb: 1,
            ml: 0,
            borderRadius: 5,
          }}
        >
          <Box
            sx={{
              bgcolor: blue[50],
              mt: 1,
              pt: 0.5,
              pb: 1.5,
              borderRadius: 4,
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>
              Статус: {props.labelStatus}
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: blue[50],
              mt: 1,
              pt: 0.5,
              pb: 1.5,
              borderRadius: 4,
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>
              Дата: {props.labelData}
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: blue[50],
              mt: 1,
              mb: 1,
              pt: 0.5,
              pb: 1.5,
              borderRadius: 4,
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>
              Цена: {props.labelPrice}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
            <DialogDelite/>
            <ButtonBasic label="изменить" variant="contained" />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
