import {
  Box,
  Button,
  CardMedia,
  Grid2,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import All from "../assets/All.jpg";
import Image from "../assets/hotel.avif";
import Bed from "../assets/bedroom.avif";
import single from "../assets/single.jpg";

import { useEffect, useState } from "react";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Travellers from "./Travellers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import { Link, useParams } from "react-router-dom";
import spa from "../assets/spa.jpg";
import gym from "../assets/gym.jpg";
import pool from "../assets/pool.jpg";
import breakImage from "../assets/break.jpg";
import HotelIcon from "@mui/icons-material/Hotel";
import PeopleIcon from "@mui/icons-material/People";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import CampaignIcon from "@mui/icons-material/Campaign";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HotelApi from "../api/HotelApi";
import { HotelDetailsDto } from "../dto/HotelDetailsDto";
import Image1 from "../assets/cards-cc_american_express.svg";
import Image2 from "../assets/cards-cc_master_card.svg";
import Image3 from "../assets/cards-cc_visa.svg";

const HotelDetailsPage = () => {
  const [value1, setValue1] = useState<DateRange<Dayjs>>([
    dayjs(new Date()),
    dayjs(new Date()),
  ]);

  const { id } = useParams(); // Retrieve ID from the URL
  const [details, setDetails] = useState<HotelDetailsDto>(
    {} as HotelDetailsDto
  );

  useEffect(() => {
    // Fetch data using the ID
    const fetchDetails = async () => {
      if (id) {
        try {
          const response = await HotelApi.getById(id);
          const data = await response.existingHotel;
          setDetails(data);
        } catch (error) {
          console.error("Error fetching details:", error);
        }
      }
    };
    fetchDetails();
  }, [id]);

  console.log("details", details);
  return (
    <Box width="100%" maxWidth={1280} margin="auto">
      <img src={Image} alt="background" width="100%" height="100%" />
      <Stack direction="column" spacing={3} paddingY={3}>
        <Stack direction="column" spacing={3}>
          <Typography variant="h3" fontFamily="NotoSansJP" fontWeight={600}>
            {" "}
            {details?.hotel_name}
          </Typography>
          <Rating name="simple-controlled" defaultValue={3.5} precision={0.5} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography
            sx={{
              background: "#acd145",
              color: "white",
              padding: "8px 15px",
              fontFamily: "mulish",
            }}
          >
            8.5
          </Typography>
          <Typography fontFamily="mulish">Very Good</Typography>
        </Stack>
      </Stack>
      <Stack direction="column" spacing={3}>
        <Typography variant="h3" fontFamily="NotoSansJP" fontWeight={600}>
          About this property
        </Typography>
        <Typography fontFamily="NotoSansJP">{details?.description}</Typography>
        <Grid2 container spacing={3} paddingY={2}>
          <Grid2 size={3}>
            <Stack direction="column" spacing={2}>
              <Typography
                fontSize="16px"
                fontFamily="NotoSansJP"
                fontWeight={600}
              >
                All Exclusives
              </Typography>
              <CardMedia
                sx={{ height: 250, borderRadius: "8px" }}
                image={All}
                title="green iguana"
              />
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Stack direction="column" spacing={2}>
              <Typography
                fontSize="16px"
                fontFamily="NotoSansJP"
                fontWeight={600}
              >
                Breakfast Included
              </Typography>
              <CardMedia
                sx={{ height: 250, borderRadius: "8px" }}
                image={breakImage}
                title="green iguana"
              />
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Stack direction="column" spacing={2}>
              <Typography
                fontSize="16px"
                fontFamily="NotoSansJP"
                fontWeight={600}
              >
                Spa
              </Typography>
              <CardMedia
                sx={{ height: 250, borderRadius: "8px" }}
                image={spa}
                title="green iguana"
              />
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Stack direction="column" spacing={2}>
              <Typography
                fontSize="16px"
                fontFamily="NotoSansJP"
                fontWeight={600}
              >
                Gym
              </Typography>
              <CardMedia
                sx={{ height: 250, borderRadius: "8px" }}
                image={gym}
                title="green iguana"
              />
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Stack direction="column" spacing={2}>
              <Typography
                fontSize="16px"
                fontFamily="NotoSansJP"
                fontWeight={600}
              >
                Pool
              </Typography>
              <CardMedia
                sx={{ height: 250, borderRadius: "8px" }}
                image={pool}
                title="green iguana"
              />
            </Stack>
          </Grid2>
          <Grid2 size={3}>
            <Stack direction="column" spacing={2}>
              <Typography
                fontSize="16px"
                fontFamily="NotoSansJP"
                fontWeight={600}
              >
                Restaurant
              </Typography>
              <CardMedia
                sx={{ height: 250, borderRadius: "8px" }}
                image={All}
                title="green iguana"
              />
            </Stack>
          </Grid2>
        </Grid2>
      </Stack>
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
      <Stack direction="row" spacing={3}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#acd145", color: "white" }}
        >
          All Rooms
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "#acd145", border: "1px solid #acd145" }}
        >
          1 Bed
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "#acd145", border: "1px solid #acd145" }}
        >
          2 Bed
        </Button>
      </Stack>
      <Grid2
        spacing={3}
        width="100%"
        maxWidth={1280}
        margin="auto"
        container
        paddingY={5}
      >
        <Grid2 size={4}>
          <Stack
            direction="column"
            spacing={2}
            sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <CardMedia
              sx={{ height: 250, borderRadius: "8px" }}
              image={Bed}
              title="green iguana"
            />

            <Stack direction="column" spacing={2} paddingX={3}>
              <Typography>Standard Double Room, Balcony (U)</Typography>
              <Stack direction="row" spacing={2}>
                <FreeBreakfastIcon />
                <Typography>Free breakfast</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <LocalParkingIcon />
                <Typography>Free self parking</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <PeopleIcon />
                <Typography>Sleeps 4</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <HotelIcon />
                <Typography>2 Double Beds OR 1 King Bed</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <CampaignIcon />
                <Typography> All-inclusive (food/beverages/snacks)</Typography>
                <Link to={""}>More details</Link>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                paddingY={2}
              >
                <Stack direction="row" spacing={0.5} alignItems="center">
                  {" "}
                  <CurrencyRupeeIcon /> <Typography>3500</Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#acd145", color: "white" }}
                >
                  Reserve
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Stack
            direction="column"
            spacing={2}
            sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <CardMedia
              sx={{ height: 250, borderRadius: "8px" }}
              image={single}
              title="green iguana"
            />

            <Stack direction="column" spacing={2} paddingX={3}>
              <Typography>Family Room, Balcony (U)</Typography>
              <Stack direction="row" spacing={2}>
                <FreeBreakfastIcon />
                <Typography>Free breakfast</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <LocalParkingIcon />
                <Typography>Free self parking</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <PeopleIcon />
                <Typography>Sleeps 2</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <HotelIcon />
                <Typography>1 Beds </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <CampaignIcon />
                <Typography> All-inclusive (food/beverages/snacks)</Typography>
                <Link to={""}>More details</Link>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                paddingY={2}
              >
                <Stack direction="row" spacing={0.5} alignItems="center">
                  {" "}
                  <CurrencyRupeeIcon /> <Typography>3500</Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#acd145", color: "white" }}
                >
                  Reserve
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
      <Grid2 container paddingY={4} spacing={5}>
        <Grid2 size={4}>
          <Stack direction="column" spacing={4}>
            <Typography variant="h3" fontFamily="NotoSansJP" fontWeight={600}>
              Accessibility
            </Typography>
            <Typography fontSize="20px" fontFamily="NotoSansJP">
              If you have requests for specific accessibility needs, please
              contact the property using the information on the reservation
              confirmation received after booking.
            </Typography>
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Stack direction="column" spacing={4}>
            <Typography fontFamily="NotoSansJP" fontWeight={600}>
              Common areas
            </Typography>
            <Stack direction="column" spacing={2}>
              <Typography fontFamily="NotoSansJP">
                Wheelchair accessible (may have limitations)
              </Typography>
              <Typography fontFamily="NotoSansJP"> No elevator</Typography>
              <Typography fontFamily="NotoSansJP">
                Wheelchair-accessible parking
              </Typography>
              <Typography fontFamily="NotoSansJP">
                Wheelchair-accessible path of travel
              </Typography>
              <Typography fontFamily="NotoSansJP">
                Wheelchair-accessible registration desk
              </Typography>
              <Typography fontFamily="NotoSansJP">
                Wheelchair-accessible restaurant
              </Typography>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
      <Grid2 container paddingY={4} spacing={5}>
        <Grid2 size={3}>
          <Typography variant="h3" fontFamily="NotoSansJP" fontWeight={600}>
            Policies
          </Typography>
        </Grid2>
        <Grid2 size={5}>
          <Stack direction="column" spacing={3}>
            <Stack direction="column" spacing={1}>
              <Typography>Check-in</Typography>
              <Typography>
                Check-in start time: 3:00 PM; Check-in end time: 11 PM
              </Typography>
            </Stack>
            <Stack direction="column" spacing={1}>
              <Typography>Late check-in subject to availability </Typography>
              <Typography>Minimum check-in age: 18 </Typography>
            </Stack>

            <Typography variant="h6" fontFamily="NotoSansJP" fontWeight={600}>
              {" "}
              Special check-in instructions{" "}
            </Typography>
            <Typography>
              Front desk staff will greet guests on arrival{" "}
            </Typography>
            <Typography>
              This property does not permit name changes on reservations. The
              name on the booking must match the name of the guest who is
              checking in and staying at the property; photo ID is required.{" "}
            </Typography>
            <Typography variant="h6" fontFamily="NotoSansJP" fontWeight={600}>
              Access methods
            </Typography>
            <Typography> Staffed front desk </Typography>
            <Typography variant="h6" fontFamily="NotoSansJP" fontWeight={600}>
              Pets
            </Typography>
            <Typography> No pets or service animals allowed</Typography>
            <Typography variant="h6" fontFamily="NotoSansJP" fontWeight={600}>
              {" "}
              Children and extra beds{" "}
            </Typography>
            <Typography>Children are welcome</Typography>
            <Typography>
              Rollaway/extra beds are not available Free cribs are available on
              request at the property
            </Typography>

            <Typography>Property payment types</Typography>
            <Stack direction="row" spacing={2}>
              <img src={Image1} alt="background" width={60} height={50} />
              <img src={Image2} alt="background" width={60} height={60} />
              <img src={Image3} alt="background" width={60} height={60} />
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Typography>Check-out </Typography>
          <Typography>Check-out before noon</Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default HotelDetailsPage;
