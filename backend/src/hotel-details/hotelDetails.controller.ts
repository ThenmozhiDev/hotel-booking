import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from "@nestjs/common";
import { HotelDetailsService } from "./hotelDetails.service";
import { HotelDetailsDto } from "./dto/hotelDetails.dto";
@Controller("hotel")
export class HotelDetailsController {
  constructor(private readonly hotelDetailsService: HotelDetailsService) {}
  @Post("add")
  async createHotelDetails(
    @Res() response,
    @Body() createHotelDto: HotelDetailsDto
  ) {
    try {
      const newHotel =
        await this.hotelDetailsService.createHotel(createHotelDto);
      return response.status(HttpStatus.CREATED).json({
        message: "Hotel has been created successfully",
        newHotel,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: "Error: Hotel is not created!",
        error: "Bad Request",
      });
    }
  }
  @Put("/:id")
  async updateStudent(
    @Res() response,
    @Param("id") id: string,
    @Body() updateHotelDto: HotelDetailsDto
  ) {
    try {
      const existingHotel = await this.hotelDetailsService.updateHotel(
        id,
        updateHotelDto
      );
      return response.status(HttpStatus.OK).json({
        message: "Hotel has been successfully updated",
        existingHotel,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getHotels(@Res() response) {
    try {
      const hotelsData = await this.hotelDetailsService.getAllHotels();
      return response.status(HttpStatus.OK).json({
        message: "All hotels data found successfully",
        hotelsData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get("/:id")
  async getStudent(@Res() response, @Param("id") id: string) {
    try {
      const existingHotel = await this.hotelDetailsService.getHotelById(id);
      return response.status(HttpStatus.OK).json({
        message: "Hotel found successfully",
        existingHotel,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete("/:id")
  async deleteHotel(@Res() response, @Param("id") id: string) {
    try {
      const deletedHotel = await this.hotelDetailsService.deleteHotel(id);
      return response.status(HttpStatus.OK).json({
        message: "hotel deleted successfully",
        deletedHotel,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
