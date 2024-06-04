"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { Status } from "@/interface";
import { createNewTodo } from "@/api";

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
};
interface TodoModalProps {
  getData: () => void;
  setUiState: React.Dispatch<
    React.SetStateAction<{
      success?: string | undefined;
      error?: string | undefined;
      loading: boolean;
    }>
  >;
}

const TodoModal: React.FC<TodoModalProps> = ({ setUiState, getData }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState<string>("");
  const [note, setNote] = React.useState<string>("");
  const [status, setStatus] = React.useState<Status>(Status.TODO);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as Status);
  };
  const handleCreateTodoCard = async () => {
    try {
      setUiState({ loading: true });
      handleClose();
      const newTodo = await createNewTodo({ title, note, status });
      if (newTodo) {
        getData();
      }
      setUiState({
        loading: false,
      });
    } catch (error) {
      setUiState({ loading: false, error: error as string });
    }
  };
  return (
    <div>
      <Button variant="contained" sx={{ width: "100%" }} onClick={handleOpen}>
        Create TODO Card
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography gutterBottom variant="h5" component="div">
              NEW TODO CARD
            </Typography>
            <TextField
              sx={{ marginBottom: "10px" }}
              label="Title"
              variant="outlined"
              name="title"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              label="Description"
              variant="outlined"
              name="note"
              fullWidth
              onChange={(e) => setNote(e.target.value)}
            />
            <FormControl sx={{ marginBottom: "10px" }} fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={Status.TODO}>TODO</MenuItem>
                <MenuItem value={Status.INPROGRESS}>INPROGRESS</MenuItem>
                <MenuItem value={Status.DONE}>DONE</MenuItem>
              </Select>
            </FormControl>
            <Button variant="outlined" onClick={handleCreateTodoCard}>
              Create
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default TodoModal;
