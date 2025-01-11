import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import AccordionMainOrder1 from "./Accordion_MainOrder1";

//Блок для двух и более панелей

export default function Accordion_MainOrder2() {
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
          <Typography component="span">200 X 300 - 2 шт.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack sx={{ mr: 5 }} direction="column" spacing={0}>
            <AccordionMainOrder1 />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
