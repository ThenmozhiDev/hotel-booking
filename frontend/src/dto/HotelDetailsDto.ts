export interface HotelDetailsDto {
  hotel_name: string;
  location: string;
  city: string;
  createdAt: Date;
  reviews: string;
  per_night: string;
  description: string;
  _id: string;
}
export interface HotelDto {
  message: string;
  hotelsData: HotelDetailsDto[];
}

export interface GetHotelDto {
  message: string;
  getHotels: HotelDetailsDto[];
}
