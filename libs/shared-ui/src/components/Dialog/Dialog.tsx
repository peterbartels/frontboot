import {
  Dialog as MuiDialog,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  DialogContentText as MuiDialogContentText,
  DialogTitle as MuiDialogDialogTitle,
  styled,
} from '@mui/material';

export const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: theme.palette.darkGrey.light,
    maxWidth: '900px',
    // width: '800px',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const DialogContent = MuiDialogContent;
export const DialogActions = MuiDialogActions;
export const DialogContentText = MuiDialogContentText;
export const DialogTitle = MuiDialogDialogTitle;
