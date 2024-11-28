import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BoyIcon from "@mui/icons-material/Boy";
import HotelIcon from "@mui/icons-material/Hotel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function Travellers() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [adultAdd, setAdultAdd] = useState<number>(2);
  const [childAdd, setChildAdd] = useState<number>(0);
  const [roomAdd, setRoomAdd] = useState<number>(1);
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    setAdultAdd(adultAdd + 1);
  };
  const handleChild = () => {
    setChildAdd(childAdd + 1);
  };
  const handleAddRoom = () => {
    setRoomAdd(roomAdd + 1);
  };

  const handleRemove = () => {
    if (adultAdd > 0) {
      setAdultAdd(adultAdd - 1);
    }
  };
  const handleChildRemove = () => {
    if (childAdd > 0) {
      setChildAdd(childAdd - 1);
    }
  };
  const handleRoomRemove = () => {
    if (roomAdd > 1) {
      setRoomAdd(roomAdd - 1);
    }
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(true);
  };
  const handleCloseClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(false);
  };

  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        fullWidth
        sx={{
          padding: "14px",
          marginTop: "7px",
          color: "black",
          border: "1px solid rgba(0, 0, 0, 0.23)",
          textTransform: "capitalize",
          fontFamily: "mulish",
        }}
      >
        {adultAdd} adults, {roomAdd} room{" "}
        {childAdd > 0 ? `, ${childAdd} childern` : ""}
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} sx={{ width: "300px" }}>
        <Stack
          direction="column"
          spacing={2}
          padding={2}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <PeopleAltIcon sx={{ fontSize: "30px" }} />
            <Stack direction="row" spacing={3} alignItems="center">
              <IconButton
                onClick={handleRemove}
                sx={{
                  background: "#bef768",
                  color: "white",
                  ":hover": { background: "#bef768" },
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography fontFamily="mulish">{adultAdd}</Typography>
              <IconButton
                onClick={handleAdd}
                sx={{
                  background: "#bef768",
                  color: "white",
                  ":hover": { background: "#bef768" },
                }}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <BoyIcon sx={{ fontSize: "30px" }} />
            <Stack direction="row" spacing={3} alignItems="center">
              <IconButton
                onClick={handleChildRemove}
                sx={{
                  background: "#bef768",
                  color: "white",
                  ":hover": { background: "#bef768" },
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography fontFamily="mulish">{childAdd}</Typography>
              <IconButton
                onClick={handleChild}
                sx={{
                  background: "#bef768",
                  color: "white",
                  ":hover": { background: "#bef768" },
                }}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HotelIcon sx={{ fontSize: "30px" }} />
            <Stack direction="row" spacing={3} alignItems="center">
              <IconButton
                onClick={handleRoomRemove}
                sx={{
                  background: "#bef768",
                  color: "white",
                  ":hover": { background: "#bef768" },
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography fontFamily="mulish">{roomAdd}</Typography>
              <IconButton
                onClick={handleAddRoom}
                sx={{
                  background: "#bef768",
                  color: "white",
                  ":hover": { background: "#bef768" },
                }}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Divider />
          <Button variant="text" onClick={handleCloseClick}>
            Done
          </Button>
        </Stack>
      </Popper>
    </>
  );
}
