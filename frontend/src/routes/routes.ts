const ROOT = "/";

// Auth Routes
const LOGIN = "/login";
const HOME = "/home";
const REGISTER = "/register";
const HOTEL = (id: string) => `/hotel/${id}`;
const SEARCH_HOTEL = "/hotelFetch/search-hotel-list";

const routes = {
  ROOT,
  LOGIN,
  HOME,
  REGISTER,
  HOTEL,
  SEARCH_HOTEL,
};

export default routes;
