import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";

export default function IconPositionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab label="вход" icon={<LoginIcon />} iconPosition="start" />
        <Tab
          label="регистрация"
          icon={<AppRegistrationIcon />}
          iconPosition="start"
        />
      </Tabs>
    </Box>
  );
}
