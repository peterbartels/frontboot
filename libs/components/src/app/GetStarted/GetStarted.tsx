import { Box, Button, Grid, TextField, Typography } from '@mui/material';
//import { Project } from '@northlyjs/data';
import { useState } from 'react';
import { Dialog, DialogContent } from '@frontboot/components/shared';
import GetStartedOptions from './GetStartedOptions';
import { ProjectStartType } from './types';

interface GetStartedProps {
  onSelectProject: (p: any) => void;
}

export function GetStarted(props: GetStartedProps) {
  const { onSelectProject } = props;
  const [selectedItem, setSelectedItem] = useState<ProjectStartType>('new');

  const cloneProject = () => {
    onSelectProject({
      name: 'Tiny App',
      githubUrl: 'https://github.com/peterbartels/tiny-react-app',
    });
  };

  return (
    <Dialog open={true}>
      <DialogContent sx={{ textAlign: 'center' }}>
        <Typography variant="introHeader">welcome to northlyjs</Typography>
        <Typography variant="h4">get started by selecting a project</Typography>
        <Grid container mt={1} spacing={4}>
          <Grid item xs={12} md={6}>
            <GetStartedOptions
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            textAlign="left"
            mt={2}
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            {selectedItem === 'new' && (
              <TextField
                autoFocus
                fullWidth
                // label="Project name"
                variant="standard"
                disabled
                value={'tiny-react-app'}
              />
            )}
            {selectedItem === 'clone' && (
              <TextField
                autoFocus
                fullWidth
                // label="Github repository url"
                variant="standard"
                disabled
                value={'https://github.com/peterbartels/tiny-react-app.git'}
              />
            )}
            <Box>
              <Button variant="contained" onClick={cloneProject}>
                Create
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default GetStarted;
