import { Box, Grid2, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Content = () => {
  return (
    <Grid2
      container
      width="100%"
      maxWidth={1280}
      margin="auto"
      paddingY={5}
      rowSpacing={6}
      columnGap={3}
    >
      <Grid2 size={12}>
        <Typography variant="h3" fontFamily="NotoSansJP" fontWeight={600}>
          Find and book your perfect stay
        </Typography>
      </Grid2>
      <Grid2 size={3.5}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          padding={3.8}
          sx={{ background: "#bef768", borderRadius: "25px" }}
        >
          <SearchIcon sx={{ fontSize: "35px" }} />
          <Typography fontSize="16px" fontFamily="NotoSansJP" fontWeight={600}>
            Find the best hotel in Bengaluru for your dates, by price or
            preference
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 size={3.5}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          padding={3.8}
          sx={{ background: "#bef768", borderRadius: "25px" }}
        >
          <LocalOfferIcon sx={{ fontSize: "35px" }} />
          <Typography fontSize="16px" fontFamily="NotoSansJP" fontWeight={600}>
            Compare deals for Greenpark Bengaluru across hundreds of sites, all
            in one place
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 size={3.8}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          padding={3.5}
          sx={{ background: "#bef768", borderRadius: "25px" }}
        >
          <CalendarMonthIcon sx={{ fontSize: "35px" }} />
          <Typography fontSize="16px" fontFamily="NotoSansJP" fontWeight={600}>
            Look out for a deal with free cancellation options if plans change
            or excellent ratings
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};
export default Content;
