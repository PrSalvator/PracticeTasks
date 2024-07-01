import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props{
    handleDelete: () => void;
    handleUpdate: () => void;
}

export const Actions = ({handleDelete, handleUpdate}: Props) => {
    return (
        <List className="border rounded-2" sx={{background: 'white'}}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDelete}>
              <ListItemIcon>
                <DeleteIcon/>
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleUpdate}>
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItemButton>
          </ListItem>
        </List>
    )
}