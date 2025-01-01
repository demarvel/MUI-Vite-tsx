import Typography from "@mui/material/Typography";


const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    //borderRadius: 2,
    //border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
   // borderBottom: 1,
    my: 0
}

export default function Types() {
  return (
    <Typography
      variant="body1"
      gutterBottom
      align="center"
      color="primary"
      sx={style}
    >
      Забыли пароль?
    </Typography>
  );
}
