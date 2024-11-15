import {
  Avatar,
  Button,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.LOGIN);
  };
  const handleRegisterClick = () => {
    navigate(routes.REGISTER);
  };

  const userData = localStorage.getItem("user");

  const user = userData ? JSON.parse(userData) : null;
  console.log("user", user);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center">
        <Typography variant="h4" fontFamily="Berkshire Swash">
          bookNow
        </Typography>
        <IconButton>
          <SwipeLeftIcon sx={{ fontSize: "50px", color: "#acd145" }} />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={4} alignItems="center">
        <Typography fontSize="20px" fontFamily="Mulish">
          Services
        </Typography>
        <Typography fontSize="20px" fontFamily="Mulish">
          About Us
        </Typography>
        <Typography fontSize="20px" fontFamily="Mulish">
          Contact Us
        </Typography>
        {user ? (
          <>
            <Stack direction="row" spacing={2}>
              {" "}
              <Avatar onClick={handleButtonClick}>{user.name}</Avatar>{" "}
              <Typography>{user.name}</Typography>
            </Stack>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              sx={{
                background: "#acd145",
                fontFamily: "Mulish",
                fontSize: "16px",
              }}
              onClick={handleClick}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#acd145",
                fontFamily: "Mulish",
                fontSize: "16px",
              }}
              onClick={handleRegisterClick}
            >
              Register
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};
export default Header;
