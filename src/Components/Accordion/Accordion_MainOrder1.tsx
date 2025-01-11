import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Box } from "@mui/material";
import MenuMainOrder from "../Menu/MenuMainOrder";

//Блок для одной панели

export default function Accordion_MainOrder1() {
  return (
    <Box sx={{ pl: 2, pt: 2, pb: 2.5, right: 0 }}>
      <Stack direction="row" spacing={2}>
        <Typography>200 x 300 - 1 шт.</Typography>
        <MenuMainOrder />
      </Stack>
    </Box>
  );
}
