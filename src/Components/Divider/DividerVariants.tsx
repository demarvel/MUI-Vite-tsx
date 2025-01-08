import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

const style = {
  py: 0,
  top: 5,
  width: "100%",
  //maxWidth: 360,
  //borderRadius: 2,
  //border: '1px solid',
  borderColor: "divider",
  backgroundColor: "background.paper",
  //borderBottom: 1,
};

export default function DividerVariants() {
  return (
    <List sx={style}>
      <Divider component="li" />
    </List>
  );
}
