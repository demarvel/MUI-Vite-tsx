import Button from "@mui/material/Button";
//import { styled } from '@mui/material/styles';

// const BootstrapButton = styled(Button)({
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 13,
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: '#0063cc',
//     borderColor: '#0063cc',
//     fontFamily: [
//
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//
//     ].join(','),
//     '&:hover': {
//       backgroundColor: '#0069d9',
//       borderColor: '#0062cc',
//       boxShadow: 'none',
//     },
//     '&:active': {
//       boxShadow: 'none',
//       backgroundColor: '#0062cc',
//       borderColor: '#005cbf',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   });

export default function BasicButtons() {
  return (
    <Button
      size="large"
      sx={{
        boxShadow: 'none',
        //textTransform: "none",
        my: 1,
        //fontFamily: ['"Segoe UI"'],
      }}
      fullWidth={true}
      color="info"
      variant="contained"
    >
      Попробывать без регистрации
    </Button>
  );
}
