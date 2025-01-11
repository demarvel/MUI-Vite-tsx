import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";
import ButtonBasic from "../Button/ButtonBasic";
import { PropsWithChildren } from "react";
import DialogDelite from "../Dialog/DialogDelite";
import Autocomplete_MainOrder from "../Autocomplete/Autocomplete_MainOrder";

interface Props {
  labelPrice?: React.ReactNode;
  labelAdres?: React.ReactNode;
  labelContakts?: React.ReactNode;
  labelMaterial?: React.ReactNode;
  labelArtikul?: React.ReactNode;
  labelPetli?: React.ReactNode;
  labelPriceMetr?: React.ReactNode;
}

export default function Accordion_MainOrder(props: PropsWithChildren<Props>) {
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
          <Stack direction="column" spacing={1} sx={{ pt: 2 }}>
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 0 }}>
              Итого: 12 560p. {props.labelPrice}
            </Typography>

            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>
              Цена за кв. метр: 2 790р.
            </Typography>
          </Stack>
        </AccordionSummary>

        <AccordionDetails
          //Основной компонент

          sx={{
            mt: 1,
            mb: 1,
            ml: 0,
          }}
        >
          <Stack direction="column" spacing={2} sx={{ pt: 2 }}>
            <Autocomplete_MainOrder label="Материал" />
            <Autocomplete_MainOrder label="Артикул" />
          </Stack>
          {/* <Box
            sx={{
              bgcolor: blue[50],
              mt: 1,
              pt: 0.5,
              pb: 1.5,
              borderRadius: 4,
            }}
          >
            <Typography variant="subtitle2" sx={{ mt: 1, ml: 2 }}>
              Материал: {props.labelMaterial}
            </Typography>
          </Box> */}

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
