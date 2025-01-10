import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack } from "@mui/material";
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
          pt: 1,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box>
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>
              Итого:12 560p. {props.labelStatus}
            </Typography>
          </Box>

          {/* <Avatar sx={{ bgcolor: blue[100] }}>
            <FolderIcon color="primary" />
            </Avatar> */}
          <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>
            Данные заказа: {props.labelOrder}
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          //Основной компонент
          sx={{
            boxShadow: 0,
            //bgcolor: blue[100],
            border: 1,
            borderColor: "grey.500",
            mt: 1,
            mb: 1,
            ml: 1,
            mr: 1,
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
              Адрес доставки: {props.labelStatus}
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
              Контакты: {props.labelData}
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
              Материал: {props.labelPrice}
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
              Артикул: {props.labelPrice}
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
              Дверные петли: {props.labelPrice}
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
              Стоимость за кв. метр: {props.labelPrice}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
            <DialogDelite />
            <ButtonBasic
              fullWidth={true}
              label="Сохранить"
              variant="contained"
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
