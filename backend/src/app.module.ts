import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { RegisterSchema } from "./register/schema/register.schema";
import { RegisterController } from "./register/register.controller";
import { RegisterService } from "./register/register.service";
import { JwtModule } from "@nestjs/jwt";
import { HotelDetailsService } from "./hotel-details/hotelDetails.service";
import { HotelDetailsController } from "./hotel-details/hotelDetails.controller";
import { HotelDetailsSchema } from "./hotel-details/schema/hotelDetails.schema";
import { HotelFetchDetailsController } from "./hotel-details/hotelFetchDetails.controller";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/hotel-booking"),
    MongooseModule.forFeature([{ name: "Register", schema: RegisterSchema }]),
    MongooseModule.forFeature([
      { name: "HotelDetails", schema: HotelDetailsSchema },
    ]),
    JwtModule.register({
      secret: "your-jwt-secret", // Use a more secure secret in production
      signOptions: { expiresIn: "1h" }, // Set JWT expiration time
    }),
  ],
  controllers: [
    AppController,
    RegisterController,
    HotelDetailsController,
    HotelFetchDetailsController,
  ],
  providers: [AppService, RegisterService, HotelDetailsService],
})
export class AppModule {}
