import {
  Box,
  Button,
  CardMedia,
  Divider,
  FormControl,
  Grid,
  Grid2,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Pagination,
  Rating,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import image from "../assets/alexander-kaunas-xEaAoizNFV8-unsplash_CROP.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useParams } from "react-router-dom";
import { HotelDetailsDto } from "../dto/HotelDetailsDto";
import HotelApi from "../api/HotelApi";

const SearchContent = () => {
  const [age, setAge] = useState("popularity");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const location = useLocation();

  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);

  const city = searchParams.get("city") || "N/A";
  const checkIn = searchParams.get("checkIn") || "Not specified";
  const checkOut = searchParams.get("checkOut") || "Not specified";
  const adults = searchParams.get("adults") || 0;
  const rooms = searchParams.get("rooms") || 0;

  console.log("values of search", city, checkIn, checkOut);

  const detailsData = {
    city: city,
    // checkIn: checkIn,
    // checkOut: checkOut,
    adults: Number(adults),
    rooms: Number(rooms),
  };

  const [details, setDetails] = useState<HotelDetailsDto[]>([]);

  useEffect(() => {
    // Fetch data using the ID
    const fetchDetails = async () => {
      if (detailsData) {
        try {
          const response = await HotelApi.searchHotels(detailsData);
          //const data = await response.existingHotel;
          setDetails(response);
        } catch (error) {
          console.error("Error fetching details:", error);
        }
      }
    };
    fetchDetails();
  }, []);

  console.log("searchdata fdfdgfdg", details);

  return (
    <Stack
      direction="column"
      spacing={5}
      paddingY={5}
      width="100%"
      maxWidth={1280}
      margin="auto"
    >
      <Typography variant="h3" fontFamily="NotoSansJP" fontWeight={600}>
        Searched Hotel Details
      </Typography>

      {/* Search Filters */}
      <Grid2 container spacing={3} alignItems="center">
        <Grid2 size={4}>
          <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
            <OutlinedInput
              sx={{ fontFamily: "Mulish" }}
              id="outlined-adornment-search"
              placeholder="Enter the hotel name"
              value={city}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton>
                    <LocationOnIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid2>
        <Grid2 size={4}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="popularity">Popularity</MenuItem>
              <MenuItem value="price low to high">Price Low to High</MenuItem>
              <MenuItem value="price high to low">Price High to Low</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={3}>
          <Button
            variant="contained"
            sx={{
              background: "#acd145",
              fontFamily: "Mulish",
              fontSize: "16px",
              marginX: "10px",
              width: "148px",
              padding: "13px",
            }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Grid2>
      </Grid2>

      {/* Search Results */}
      {details.map((item, index) => (
        <Grid2
          container
          margin={2}
          spacing={2}
          rowGap={5}
          sx={{
            borderRadius: "10px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
          key={index}
        >
          <Grid2 size={4}>
            <Stack>
              <img src="" alt="Hotel" />
            </Stack>
          </Grid2>
          <Grid2 size={6}>
            <Stack direction="column" spacing={3} padding={3}>
              <Stack direction="row" spacing={2}>
                <Typography
                  gutterBottom
                  fontSize="22px"
                  fontWeight={600}
                  fontFamily="NotoSansJP"
                >
                  {item.hotel_name}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={3}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="body1" fontFamily="NotoSansJP">
                  Hotel
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <LocationOnIcon />
                <Typography fontSize="16px" fontFamily="NotoSansJP">
                  {item.location}
                </Typography>
              </Stack>
              <Typography fontSize="14px" fontFamily="NotoSansJP">
                {item.description}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  sx={{
                    background: "#acd145",
                    color: "white",
                    padding: "8px 15px",
                    fontFamily: "Mulish",
                  }}
                >
                  8.5
                </Typography>
                <Typography fontFamily="Mulish">
                  Very Good ({item.reviews})
                </Typography>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 size={2}>
            <Stack
              direction="column"
              spacing={6}
              alignItems="center"
              padding={3}
            >
              <Stack direction="column" spacing={1}>
                <Stack direction="row" alignItems="center">
                  <CurrencyRupeeIcon />
                  <Typography
                    fontSize="22px"
                    fontWeight={600}
                    fontFamily="NotoSansJP"
                  >
                    {item.per_night}
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  textAlign="end"
                  sx={{ color: "secondary" }}
                >
                  Per night
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  background: "#acd145",
                  color: "white",
                }}
              >
                View More
              </Button>
            </Stack>
          </Grid2>
        </Grid2>
      ))}
      {/* Pagination */}
      <Stack alignItems="center">
        <Pagination
          count={details.length}
          variant="outlined"
          shape="rounded"
          sx={{
            ".css-ptck8z-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
              {
                backgroundColor: "#acd145",
                color: "white",
              },
            ".css-ptck8z-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover":
              {
                backgroundColor: "#acd145",
                color: "white",
              },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default SearchContent;
