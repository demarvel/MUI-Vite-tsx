//import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import BasicTextFields from "../../Components/Autocomplete/TextField";
import CheckboxLabels from "../../Components/Checkbox/FormControlLabel";
import LoginButtons from "../../Components/Button/The login button";
import DividerVariants from "../../Components/Divider/BasicsDivider";
import Types from "../../Components/Typography/Body1";
import BasicButtons from "../../Components/Button/Basic button";

export default function BasicStack() {
  return (
    //<Box sx={{ width: "100%", my: 2,  maxWidth: '100%',p:2 }}>
    <Stack spacing={2} sx={{ p: 2, my: 2 }}>
      <BasicTextFields />
      <BasicTextFields />
      <CheckboxLabels></CheckboxLabels>
      <LoginButtons>входи</LoginButtons>
      <Types></Types>
      <DividerVariants></DividerVariants>
      <BasicButtons></BasicButtons>
    </Stack>
    //</Box>
  );
}
