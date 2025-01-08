import Typography from "@mui/material/Typography";
import { PropsWithChildren } from "react";


interface Props {
  label?: React.ReactNode;
}


export default function TextCaption(props: PropsWithChildren<Props>) {
  return (
      <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
        {props.label}
      </Typography>
  );
}
