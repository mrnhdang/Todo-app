import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { TodoCardProps } from "@/interface";
import CardStatus from "./CardStatus";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function TodoCard({
  id,
  title,
  note,
  createdAt,
  status,
}: TodoCardProps) {
  return (
    <Card
      key={id}
      sx={{
        maxWidth: 400,
        maxHeight: 300,
        width: 400,
        height: 300,
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
      }}
    >
      <CardActions>
        <IconButton color="error">
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
}
