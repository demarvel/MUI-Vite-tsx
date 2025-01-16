import * as React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import TextFieldData from "../Text Field/TextFieldData";
import { IconButton } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function Portal() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const buttonFilter = (
    <IconButton onClick={handleClick}>
      <FilterAltIcon />
    </IconButton>
  );

  return (
    <List>
        {/* <Button component={DrawerFilter}/> */}
      {buttonFilter}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <TextFieldData label="Дата начала" />
      </Collapse>
    </List>
  );
}
