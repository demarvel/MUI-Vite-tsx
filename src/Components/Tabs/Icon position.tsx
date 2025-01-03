import * as React from "react";
import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import BasicStack from "../../log in/New Blocks/Card Content";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    // <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          centered
          variant="fullWidth"
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
          <Tab
            label="вход"
            icon={<LoginIcon />}
            iconPosition="start"
            value="1"
          />
          <Tab
            label="регистрация"
            icon={<AppRegistrationIcon />}
            iconPosition="start"
            value="2"
          />
        </TabList>
      </Box>
      <TabPanel value="1">
        <BasicStack />
      </TabPanel>
      // <TabPanel value="2">Iteffm Two</TabPanel>
    </TabContext>
    // </Box>
  );
};
