//import * as React from 'react';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
        control={<Checkbox defaultChecked />}
        label="Запомни меня"
      />
    </FormGroup>
  );
}
