import * as React from "react";
import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import BasicStackLogin from "../Stack/StackLogin";
import BasicStackSingin from "../Stack/StackSingin";
import Button_Drawer from "../Button/Button_Drawer";

export default function Tabs_MainCircle() {
  const [value, setValue] = React.useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          centered
          variant="fullWidth"
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
            {/* <Button_Drawer label="Ручка снизу" variant="outlined" /> */}
          <Tab
            label="вход"
            //icon={<LoginIcon />}
            //iconPosition="start"
            value="1"
            sx={{
                fontSize: 12,
                //boxShadow: 0,
                borderRadius: 4,
                pt: 1.5,
                pb: 1.5,
                minHeight: 60,
                border: 1
                
              }}
          />
          <Tab
            label="регистрация"
            //icon={<AppRegistrationIcon />}
            //iconPosition="start"
            value="2"
          />
        </TabList>
      </Box>
      <TabPanel value="1">
        <BasicStackLogin />
      </TabPanel>
      <TabPanel value="2">
        <BasicStackSingin />
      </TabPanel>
    </TabContext>
  );
}
