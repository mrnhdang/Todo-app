import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { TodoCardProps } from "@/interface";

export default function TodoCard({
  id,
  title,
  description,
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
      <CardActionArea sx={{ display: "flex", flexGrow: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {createdAt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">{status}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ flex: "none" }}>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
