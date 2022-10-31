import { FolderOpen, GitHub } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ProjectStartType } from './types';

interface GetStartedOptionsProps {
  setSelectedItem: (name: ProjectStartType) => void;
  selectedItem: ProjectStartType;
}

const ListItemStyle = (
  actual: ProjectStartType,
  expected: ProjectStartType
) => ({
  mb: 1,
  border: expected === actual ? '1px solid #54536544' : '1px solid #fff',
  cursor: 'pointer',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  alignItems: 'flex-start',
  boxShadow:
    expected === actual ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px;' : '',
});

function GetStartedOptions(props: GetStartedOptionsProps) {
  const { setSelectedItem, selectedItem } = props;
  return (
    <List sx={{ width: '100%' }}>
      <ListItem
        onClick={() => setSelectedItem('new')}
        sx={ListItemStyle(selectedItem, 'new')}
      >
        <ListItemIcon>
          <FolderOpen color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="Create a new project"
          secondary="Start working from stratch"
        />
      </ListItem>

      <ListItem
        onClick={() => setSelectedItem('clone')}
        sx={ListItemStyle(selectedItem, 'clone')}
      >
        <ListItemIcon>
          <GitHub color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="Open a project from GitHub"
          secondary="Clone and checkout a project from GitHub"
        />
      </ListItem>
    </List>
  );
}

export default GetStartedOptions;
