import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class HotelDetails {
  @Prop()
  hotel_name: string;
  @Prop()
  location: string;
  @Prop()
  reviews: string;
  @Prop()
  city: string;
  @Prop()
  description: string;
  @Prop()
  per_night: string;
  @Prop()
  createdAt: Date;
  @Prop({ type: [Date], required: true })
  availableDates: Date[];

  @Prop({
    required: true,
    type: {
      adults: { type: Number, required: true },
      totalRooms: { type: Number, required: true },
    },
  }) // Explicitly define the nested object type
  rooms: {
    adults: number;
    totalRooms: number;
  };
}
export const HotelDetailsSchema = SchemaFactory.createForClass(HotelDetails);
