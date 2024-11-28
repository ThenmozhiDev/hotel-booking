import axios from "axios";
export interface SearchParams {
  city: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  rooms?: number;
}

export default class HotelApi {
  public static async getAllHotel() {
    try {
      const details = await axios.get("http://localhost:8000/hotel");
      // toast.success("Hotel details fetched Successfully");
      return details.data;
    } catch (e) {
      console.log(e, "Failed to get  hotel details");
      //toast.error("Failed to get  hotel details");
    }
  }

  public static async getById(id: string) {
    try {
      const details = await axios.get(`http://localhost:8000/hotel/${id}`);
      // toast.success("Hotel details fetched Successfully");
      return details.data;
    } catch (e) {
      console.log(e, "Failed to get by id  hotel details");
      //toast.error("Failed to get  hotel details");
    }
  }

  public static async getCityByHotel(city: string) {
    try {
      const details = await axios.get(
        `http://localhost:8000/hotelFetch?city=${city}`
      );
      //toast.success("Hotel details fetched Successfully");
      return details.data;
    } catch (e) {
      console.log(e, "Failed to get hotel details");
      //toast.error("Failed to get hotel details");
    }
  }
  public static async getSearch(filters: any) {
    const query = new URLSearchParams(filters).toString();
    try {
      const details = await axios.get(
        `http://localhost:8000/hotelFetch/search?${query}`
      );
      // toast.success("Search Hotel details fetched Successfully");
      return details.data;
    } catch (e) {
      console.log(e, "Failed to get search hotel details");
      // toast.error("Failed to get search hotel details");
    }
  }
  public static async searchHotels(searchParams: SearchParams) {
    try {
      // Dynamically build the query string
      const query = Object.entries(searchParams)
        .filter(([_, value]) => value) // Include only parameters with non-empty values
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");

      console.log("Constructed Query:", query);

      const response = await axios.get(
        `http://localhost:8000/hotelFetch/search/hotel?${query}`
      );
      console.log("response api", response);
      return response.data;
    } catch (error) {
      console.error("Error while searching hotels:", error);
      throw error;
    }
  }
}
