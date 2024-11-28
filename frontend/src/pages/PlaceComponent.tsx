import { Box, Grid2, Stack, Typography } from "@mui/material";
import image from "../assets/PARTNER.avif";
import image1 from "../assets/new-image.avif";
import image2 from "../assets/new-image4.avif";

const placeComponent = () => {
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
          Discover your new favourite stay
        </Typography>
      </Grid2>
      <Grid2 size={3.5}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          padding={3}
          sx={{ borderRadius: "25px", backgroundImage: `url(${image})` }}
        >
          <Typography pt={35} fontSize="20px" fontWeight={800} color="white">
            Resorts
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 size={3.5}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          padding={3}
          sx={{ borderRadius: "25px", backgroundImage: `url(${image1})` }}
        >
          <Typography pt={35} fontSize="20px" fontWeight={800} color="white">
            Hotels
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 size={3.5}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          padding={3}
          sx={{ borderRadius: "25px", backgroundImage: `url(${image2})` }}
        >
          <Typography pt={35} fontSize="20px" fontWeight={800} color="white">
            Villas
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};
export default placeComponent;
