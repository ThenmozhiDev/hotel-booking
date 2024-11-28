import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { HotelDetailsDto } from "./dto/hotelDetails.dto";
import { HotelDetails } from "./schema/hotelDetails.schema";

@Injectable()
export class HotelDetailsService {
  constructor(
    @InjectModel("HotelDetails")
    private readonly hotelModel: Model<HotelDetails>
  ) {}
  async createHotel(createBookingDto: HotelDetailsDto): Promise<HotelDetails> {
    const newHotel = new this.hotelModel(createBookingDto);
    return newHotel.save();
  }

  async updateHotel(
    id: string,
    updateBookingDto: HotelDetailsDto
  ): Promise<HotelDetails> {
    const existingHotel = await this.hotelModel.findByIdAndUpdate(
      id,
      updateBookingDto,
      { new: true }
    );
    if (!existingHotel) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return existingHotel;
  }
  async getAllHotels(): Promise<HotelDetails[]> {
    const hotelData = await this.hotelModel.find();

    if (!hotelData || hotelData.length == 0) {
      throw new NotFoundException("Students data not found!");
    }
    return hotelData;
  }

  async getHotelById(id: string): Promise<HotelDetails> {
    const existingHotel = await this.hotelModel.findById(id).exec();
    if (!existingHotel) {
      throw new NotFoundException(`Hotel #${id} not found`);
    }
    return existingHotel;
  }

  async deleteHotel(id: string): Promise<HotelDetails> {
    const deletedHotel = await this.hotelModel.findByIdAndDelete(id);
    if (!deletedHotel) {
      throw new NotFoundException(`hotel #${id} not found`);
    }
    return deletedHotel;
  }
  async getFilterByCity(city: string): Promise<HotelDetails[]> {
    const getCityData = await this.hotelModel.find({ city: city });
    if (!getCityData || getCityData.length == 0) {
      throw new NotFoundException(`Hotel #${city} not found`);
    }
    return getCityData;
  }
  async getSearchFilter(filters): Promise<HotelDetails[]> {
    const query = {};

    if (filters.city) {
      query["city"] = filters.city;
    }
    return this.hotelModel.find(query).exec();
  }

  async searchHotels(params: {
    city: string;
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    rooms?: number;
  }) {
    const { city, checkIn, checkOut, adults, rooms } = params;
    // Base query with required city field
    const query: any = { city: city };

    // Add optional filters dynamically
    if (checkIn && checkOut) {
      query.availableDates = { $all: [checkIn, checkOut] };
    }

    if (adults) {
      query["rooms.adults"] = { $gte: adults };
    }

    if (rooms) {
      query["rooms.totalRooms"] = { $gte: rooms };
    }

    // Execute query
    return this.hotelModel.find(query).exec();
  }
}
