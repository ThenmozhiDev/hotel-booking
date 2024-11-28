import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
export class HotelDetailsDto {
  @IsString()
  @IsNotEmpty()
  hotel_name: string;
  @IsString()
  @IsNotEmpty()
  location: string;
  @IsString()
  @IsNotEmpty()
  reviews: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  per_night: string;
  @ApiProperty()
  createdAt: Date;
}
