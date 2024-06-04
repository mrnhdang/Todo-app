import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { TodoCardProps } from "@/interface";
import CardStatus from "./CardStatus";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { deleteTodoCard } from "@/api";

const TodoCard: React.FC<TodoCardProps> = ({
  id,
  title,
  note,
  createdAt,
  status,
  getData,
}) => {
  const handleDeleteTodoCard = async () => {
    try {
      await deleteTodoCard(id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card
      sx={{
        maxWidth: 400,
        maxHeight: 300,
        width: 300,
        height: 300,
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
        marginRight: "20px",
        marginBottom: "20px",
      }}
    >
      <CardActions>
        <IconButton color="error" onClick={handleDeleteTodoCard}>
          <DeleteOutlinedIcon />
        </IconButton>
      </CardActions>
      <CardActionArea
        sx={{ display: "flex", flexGrow: 1, marginBottom: "10px" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created date: {createdAt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardStatus status={status} />
    </Card>
  );
};
export default TodoCard;
