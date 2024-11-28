// src/hotels/dto/hotel-search.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsOptional,
} from "class-validator";

export class HotelSearchDto {
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsOptional()
  @IsDateString()
  checkIn?: string;

  @IsOptional()
  @IsDateString()
  checkOut?: string;

  @IsOptional()
  adults?: number;

  @IsOptional()
  rooms?: number;
}
