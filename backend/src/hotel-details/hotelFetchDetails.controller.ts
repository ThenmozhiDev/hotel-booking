import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  ValidationPipe,
} from "@nestjs/common";
import { HotelDetailsService } from "./hotelDetails.service";
import { HotelSearchDto } from "./dto/hotelSearch.dto";
@Controller("hotelFetch")
export class HotelFetchDetailsController {
  constructor(private readonly hotelDetailsService: HotelDetailsService) {}
  @Get()
  async getCities(@Res() response, @Query("city") city: string) {
    try {
      const getHotels = await this.hotelDetailsService.getFilterByCity(city);
      return response.status(HttpStatus.OK).json({
        message: "Get the hotels successfully",
        getHotels,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get("search")
  async searchHotels(@Query() query: any) {
    const filters = {
      city: query.city,
    };

    return this.hotelDetailsService.getSearchFilter(filters);
  }

  @Get("search/hotel")
  async search(
    @Query(new ValidationPipe({ transform: true })) searchParams: HotelSearchDto
  ) {
    // const { city, checkIn, checkOut, adults, rooms } = searchParams;
    // const checkInDate = new Date(checkIn);
    // const checkOutDate = new Date(checkOut);

    return this.hotelDetailsService.searchHotels(searchParams);
  }
}
