import * as React from 'react';
import Button, { type ButtonProps } from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ModalConfirm {
    text?: string;
    title?: string;
    open: boolean;
    cancel?: {
        name: string,
        cancel: () => void ,
        color?: ButtonProps['color'],
    }
    confirm: {
        name: string,
        confirm: () => void,
        color?: ButtonProps['color'],
    }
    onClose?: () => void,
}

const ModalConfirm = ({text,title, open, cancel, confirm,onClose}: ModalConfirm) => {


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel?.cancel} color={cancel?.color} >{cancel?.name}</Button>
          <Button onClick={confirm?.confirm} color={confirm?.color} autoFocus>
                {confirm?.name}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default ModalConfirm;