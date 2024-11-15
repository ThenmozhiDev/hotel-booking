import axios from "axios";

import { toast } from "react-toastify";

export default class RegisterApi {
  public static async createUser(users?: any) {
    try {
      const details = await axios.post(
        "http://localhost:8000/register/signup",
        users
      );
      toast.success("User Created Successfully");
      return details.data;
    } catch (e) {
      console.log(e, "Failed to create user");
      toast.error("Failed to create user");
    }
  }

  public static async login(users?: any) {
    try {
      const details = await axios.post(
        "http://localhost:8000/register/login",
        users
      );
      toast.success("Login Successfully");
      return details.data;
    } catch (e) {
      console.log(e, "Failed to login");
      toast.error("Failed to login");
    }
  }
}
