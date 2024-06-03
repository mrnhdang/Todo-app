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

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const TodoModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  const handleCreateTodoCard = () => {
    alert("create");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
              fullWidth
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              label="Description"
              variant="outlined"
              fullWidth
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
