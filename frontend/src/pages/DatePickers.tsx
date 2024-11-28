import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Button,
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Travellers from "./Travellers";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes";
import { useEffect, useState } from "react";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import HotelApi from "../api/HotelApi";
export default function DatePickers() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState<DateRange<Dayjs>>([
    dayjs(new Date()),
    dayjs(new Date()),
  ]);

  const checkIn = value[0]?.format ? value[0].format("YYYY-MM-DD") : "";
  const checkOut = value[1]?.format ? value[1].format("YYYY-MM-DD") : "";

  const details = {
    city: search,
    checkIn: checkIn,
    checkOut: checkOut,
    adults: 2,
    rooms: 1,
  };

  const handlleSearch = (event: any) => {
    setSearch(event?.target.value);
    setError("");
  };
  console.log("value", value);

  const handleClick = async (details: any) => {
    if (!search) {
      setError("Please enter the value");
      return;
    }

    if (search && value) {
      const queryString = new URLSearchParams(
        Object.entries(details).reduce((acc, [key, value]) => {
          acc[key] = String(value); // Ensure all values are strings
          return acc;
        }, {} as Record<string, string>)
      ).toString();
      navigate(`${routes.SEARCH_HOTEL}?${queryString}`);
      //navigate(`${routes.SEARCH_HOTEL}?${details}`);
    }
    console.log("search", data);
  };

  return (
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
            Find the right hotel today here{" "}
            <ArrowDownwardIcon sx={{ fontSize: "35px" }} />
          </Typography>
        </Grid2>
        <Grid2 size={3}>
          <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
            <OutlinedInput
              sx={{ fontFamily: "mulish" }}
              id="outlined-adornment-password"
              value={search}
              onChange={handlleSearch}
              error={!!error}
              placeholder="Where to?"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <LocationOnIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
            {error ? (
              <Typography color="error" mt={2}>
                {error}
              </Typography>
            ) : (
              ""
            )}
          </FormControl>
        </Grid2>
        <Grid2 size={6}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker
              localeText={{ start: "Check-in", end: "Check-out" }}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </Grid2>
        <Grid2 size={3}>
          <Travellers />
        </Grid2>
        <Button
          variant="contained"
          sx={{
            background: "#acd145",
            fontFamily: "Mulish",
            fontSize: "16px",
            marginX: "10px",
            width: "148px",
          }}
          startIcon={<SearchIcon />}
          onClick={() => handleClick(details)}
        >
          Search
        </Button>
      </Grid2>
    </LocalizationProvider>
  );
}
