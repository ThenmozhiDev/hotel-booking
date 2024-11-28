import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Rating,
  Stack,
  Grid2,
  Button,
} from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Travellers from "./Travellers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import { Link } from "react-router-dom";
import Image from "../assets/Background.webp";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      style={{ padding: "16px" }}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function TabComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [value1, setValue1] = useState<DateRange<Dayjs>>([
    dayjs(new Date()),
    dayjs(new Date()),
  ]);

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs Header */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        sx={{ position: "sticky", top: 0, background: "#fff", zIndex: 10 }}
      >
        <Tab label="Tab One" {...a11yProps(0)} />
        <Tab label="Tab Two" {...a11yProps(1)} />
        <Tab label="Tab Three" {...a11yProps(2)} />
      </Tabs>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <Stack direction="column" spacing={3}>
          <Typography> Hotel Riu Lupita - All Inclusive</Typography>
          <Rating name="simple-controlled" defaultValue={3.5} precision={0.5} />
        </Stack>
        <Typography>8.5</Typography>
        <Typography>Very Good</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>About this property</Typography>
        <Typography>
          All-inclusive Playa del Carmen property in Playacar with 4 restaurants
        </Typography>
        <Grid2 container>
          <Grid2 size={3}>
            <img
              src={Image}
              alt="new value"
              width={200}
              height={200}
              style={{ borderRadius: "35px" }}
            />
            <Typography>All Exclusives</Typography>
          </Grid2>
          <Grid2 size={3}>
            <img
              src={Image}
              alt="new value"
              width={200}
              height={200}
              style={{ borderRadius: "35px" }}
            />
            <Typography>Breakfast Included</Typography>
          </Grid2>
          <Grid2 size={3}>
            <img
              src={Image}
              alt="new value"
              width={200}
              height={200}
              style={{ borderRadius: "35px" }}
            />
            <Typography>Spa</Typography>
          </Grid2>
          <Grid2 size={3}>
            <img
              src={Image}
              alt="new value"
              width={200}
              height={200}
              style={{ borderRadius: "35px" }}
            />
            <Typography>Gym</Typography>
          </Grid2>
          <Grid2 size={3}>
            <img
              src={Image}
              alt="new value"
              width={200}
              height={200}
              style={{ borderRadius: "35px" }}
            />
            <Typography>Pool</Typography>
          </Grid2>
          <Grid2 size={3}>
            <img
              src={Image}
              alt="new value"
              width={200}
              height={200}
              style={{ borderRadius: "35px" }}
            />
            <Typography>Restaurant</Typography>
          </Grid2>
        </Grid2>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid2
            container
            width="100%"
            maxWidth={1280}
            margin="auto"
            paddingY={5}
            spacing={4}
          >
            <Grid2 size={12}>
              <Typography
                variant="h3"
                fontFamily="NotoSansJP"
                fontWeight={600}
                paddingY={3}
              >
                Choose your room
                <ArrowDownwardIcon sx={{ fontSize: "35px" }} />
              </Typography>
            </Grid2>
            <Grid2 size={6}>
              <DemoContainer components={["DateRangePicker"]}>
                <DateRangePicker
                  localeText={{ start: "Check-in", end: "Check-out" }}
                  value={value1}
                  onChange={(newValue) => setValue1(newValue)}
                />
              </DemoContainer>
            </Grid2>
            <Grid2 size={3}>
              <Travellers />
            </Grid2>
          </Grid2>
        </LocalizationProvider>
        <Stack
          direction="row"
          spacing={3}
          width="100%"
          maxWidth={1280}
          margin="auto"
        >
          <Button variant="contained">All Rooms</Button>
          <Button variant="outlined">1 Bed</Button>
          <Button variant="outlined">2 Bed</Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid2
          direction="row"
          spacing={3}
          width="100%"
          maxWidth={1280}
          margin="auto"
        >
          <Grid2 size={4}>
            <Stack direction="column" spacing={2}>
              <img
                src={Image}
                alt="new value"
                width={200}
                height={200}
                style={{ borderRadius: "35px" }}
              />

              <Stack direction="column" spacing={2}>
                <Typography>Standard Double Room, Balcony (U)</Typography>
                <Stack direction="row" spacing={2}>
                  <FreeBreakfastIcon />
                  <Typography>Free breakfast</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FreeBreakfastIcon />
                  <Typography>Free self parking</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FreeBreakfastIcon />
                  <Typography>Sleeps 4</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FreeBreakfastIcon />
                  <Typography>2 Double Beds OR 1 King Bed</Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FreeBreakfastIcon />
                  <Typography>
                    {" "}
                    All-inclusive (food/beverages/snacks)
                  </Typography>
                  <Link to={""}>Mode details</Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Typography>3500</Typography>
                  <Button variant="contained">Reserve</Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content of Tab Three
      </TabPanel>
    </Box>
  );
}
