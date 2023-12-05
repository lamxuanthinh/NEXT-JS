import { loginPayLoad } from "./../models/auth";
import axiosClient from "./axiosClient";

export const auth = {
  login(payload: loginPayLoad) {
    return axiosClient.post("/login", payload);
  },
  logout() {
    return axiosClient.post("/logout");
  },
  profile() {
    return axiosClient.get("/profile");
  },
};
