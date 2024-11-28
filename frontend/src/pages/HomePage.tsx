import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid2,
  Link,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import image from "../assets/alexander-kaunas-xEaAoizNFV8-unsplash_CROP.jpg";
import image1 from "../assets/imagevacation.webp";
import { HotelDetailsDto, HotelDto } from "../dto/HotelDetailsDto";
import { useState, useEffect, SetStateAction } from "react";
import HotelApi from "../api/HotelApi";

import Content from "./Content";
import PlaceComponent from "./PlaceComponent";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DatePickers from "./DatePickers";
import routes from "../routes/routes";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState<HotelDto[]>([]);
  const [cityData, setCityData] = useState<HotelDetailsDto[]>([]);
  const navigate = useNavigate();

  const [selectedButton, setSelectedButton] = useState("Chennai");
  const handleButtonClick = (buttonNumber: SetStateAction<string>) => {
    setSelectedButton(buttonNumber); // Update the selected button
  };
  useEffect(() => {
    const getUser = async () => {
      const response = await HotelApi.getAllHotel();
      if (response) {
        setData(response);
      }
    };
    getUser();

    const getCity = async () => {
      const response = await HotelApi.getCityByHotel(selectedButton);
      if (response) {
        setCityData(response.getHotels);
      }
    };
    getCity();
  }, [selectedButton]);
  console.log("data", cityData);

  const handleLinkClick = (id: string) => {
    navigate(routes.HOTEL(id));
  };
  return (
    <Box>
      <img src={image} alt="backgrourd" width="100%" height="100%" />
      <Typography
        variant="h1"
        textAlign="center"
        fontFamily="NotoSansJP"
        fontWeight={600}
        color="white"
        sx={{
          position: "absolute",
          top: "340px",
          left: "90px",
          width: "100%",
          maxWidth: 1280,
        }}
      >
        Make your travel easy with a wide range of services.
      </Typography>
      <DatePickers />

      <PlaceComponent />
      <Box width="100%" maxWidth={1280} margin="auto">
        <Stack direction="column" spacing={3} paddingY={3}>
          {/* <DatePicker /> */}
          <Typography variant="h3" fontFamily="NotoSansJP" fontWeight={600}>
            Hotels in your home country
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Chennai", "Delhi", "Hyderabad", "Mumbai", "Bengaluru"].map(
              (buttonNumber) => (
                <Button
                  key={buttonNumber}
                  onClick={() => handleButtonClick(buttonNumber)}
                  style={{
                    backgroundColor:
                      selectedButton === buttonNumber ? "#acd145" : "white", // Apply styles based on selected state
                    color: selectedButton === buttonNumber ? "white" : "black",
                    padding: "10px 30px",
                    margin: "8px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  {buttonNumber}
                </Button>
              )
            )}
          </Stack>
          <Grid2
            container
            paddingY={2}
            spacing={2}
            rowGap={5}
            sx={{ flexGrow: 1 }}
          >
            {cityData.map((item, index) => (
              <Grid2 size={4} key={index}>
                <Link
                  onClick={() => handleLinkClick(item._id)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 180 }}
                      image={image1}
                      title="green iguana"
                    />
                    <Stack direction="column" spacing={2} padding={2}>
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
                      <Typography fontSize="12px" fontFamily="NotoSansJP">
                        {item.location}
                      </Typography>
                      <Stack direction="row" spacing={3}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        />
                        <Typography variant="body1" fontFamily="NotoSansJP">
                          {" "}
                          {item.reviews}
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack
                        direction="column"
                        spacing={1}
                        alignItems="flex-end"
                      >
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
                        <Typography variant="body2" sx={{ color: "secondary" }}>
                          Per night
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  {/* {cityData.length > 6 ? <Typography>View More</Typography> : ""} */}
                </Link>
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Box>
      <Content />
    </Box>
  );
};

export default HomePage;
