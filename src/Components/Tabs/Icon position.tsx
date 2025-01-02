import * as React from "react";
//import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import BasicStack from "../../log in/New Blocks/Card Content";
//import BasicStack from "../../log in/New Blocks/Card Content";

export default function IconPositionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  

  //   return (
  //     <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
  //       <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
  //         <Tab label="вход" icon={<LoginIcon />} iconPosition="start"></Tab>

  //         <Tab
  //           label="регистрация"
  //           icon={<AppRegistrationIcon />}
  //           iconPosition="start"
  //         />
  //       </Tabs>
  //     </Box>

  //   );
  // }

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <TabContext
        value={value}
        // onChange={handleChange}
        // centered
        // variant="fullWidth"
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList centered variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
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
        <TabPanel value="1"><BasicStack></BasicStack></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
