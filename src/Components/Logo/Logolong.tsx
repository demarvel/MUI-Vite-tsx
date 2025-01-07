import { Box } from "@mui/material";
import Logo_long from "/Logo_long.svg";

const Logolong = () => {
  return (
    <Box dir="rtl" sx={{ mt: 5, mb: 5 }}>
      <img src={Logo_long}></img>
    </Box>
  );
};
export default Logolong;

// <Box
//         sx={(theme) => ({
//           bgcolor: '#fff',
//           color: 'grey.800',
//           border: '1px solid',
//           borderColor: 'grey.300',
//           p: 2,
//           borderRadius: 2,
//           fontSize: '0.875rem',
//           fontWeight: '700',
//           position: 'absolute',
//           top: 0,
//           left: '80%',
//           zIndex: 'modal',
//           ...theme.applyStyles('dark', {
//             bgcolor: 'grey.800',
//             color: 'grey.300',
//             borderColor: 'grey.800',
//           }),
//         })}
//       >
