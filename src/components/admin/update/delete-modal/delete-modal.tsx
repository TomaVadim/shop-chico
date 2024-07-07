import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  handleDeleteProduct: () => void;
}

export const DeleteModal = ({ open, onClose, handleDeleteProduct }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Підтвердіть дію</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ви впевнені, що хочете видалити цей товар?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleDeleteProduct}>
          Так
        </Button>
        <Button variant="contained" color="success" onClick={onClose} autoFocus>
          Ні
        </Button>
      </DialogActions>
    </Dialog>
  );
};
