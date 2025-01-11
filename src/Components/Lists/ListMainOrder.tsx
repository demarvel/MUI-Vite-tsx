import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";




export default function ListMainOrder() {
  return (
    <List sx={{ml: 2, mr:1 ,  bgcolor: 'background.paper' }}>
      {[1, 2, 3].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <MoreVertIcon  />
              
            </IconButton>
          }
          
        >
          <ListItemText primary={`200 X 300 - ${value} шт. `} />
          <ExpandMoreIcon color='action'/>
        </ListItem>
      ))}
    </List>
  );
}