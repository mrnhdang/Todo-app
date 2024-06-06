import { Status } from "@/interface";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import { CardActions, Typography } from "@mui/material";

interface CardStatusProps {
  status: string;
}

const CardStatus: React.FC<CardStatusProps> = ({ status }) => {
  if (status === Status.DONE) {
    return (
      <CardActions
        sx={{
          width: "100%",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            width: "fit-content",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#7CFC00",
          }}
          className="font-bold text-white"
        >
          <CheckCircleOutlineOutlinedIcon />
          DONE
        </Typography>
      </CardActions>
    );
  } else if (status === Status.INPROGRESS) {
    return (
      <CardActions
        sx={{
          width: "100%",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "10px",
        }}
      >
        <CardActions
          sx={{
            borderRadius: "10px",
            width: "fit-content",
            padding: "10px",
            backgroundColor: "#00BFFF",
          }}
          className="font-bold text-white"
        >
          <CachedOutlinedIcon />
          INPROGRESS
        </CardActions>
      </CardActions>
    );
  } else {
    return (
      <CardActions
        sx={{
          width: "100%",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "10px",
        }}
      >
        <CardActions
          sx={{
            width: "fit-content",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#DCDCDC",
          }}
          className="font-bold text-white"
        >
          <HourglassEmptyOutlinedIcon />
          TODO
        </CardActions>
      </CardActions>
    );
  }
};
export default CardStatus;
