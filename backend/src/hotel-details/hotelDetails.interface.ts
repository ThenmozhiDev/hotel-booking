import { Document } from "mongoose";

export interface HotelDetailsInterface extends Document {
  hotel_name: string;
  location: string;
  reviews: string;
  city: string;
  description: string;
  per_night: string;
  createdAt: Date;
  availableDates: Date[];
  rooms: {
    adults: number;
    children: number;
    totalRooms: number;
  };
}
