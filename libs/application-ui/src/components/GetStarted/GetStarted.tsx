'use client';

import { Box, Button, Unstable_Grid2 as Grid, TextField, Typography } from '@mui/material';

import { Dialog, DialogContent } from '@frontboot/shared-ui';
import GetStartedOptions from './GetStartedOptions';
import { ProjectStartType } from './types';
import { useState as useS } from 'react';

interface GetStartedProps {
  onSelectProject?: (p: any) => void;
}

export function GetStarted(props: GetStartedProps) {
  const { onSelectProject } = props;
  const [selectedItem, setSelectedItem] = useS<ProjectStartType>('new');

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
          <Grid xs={12} md={6}>
            <GetStartedOptions
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            mt={2}
            display="flex"
            textAlign="left"
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
