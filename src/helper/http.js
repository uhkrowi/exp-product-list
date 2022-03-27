import axios from "axios";

const http = axios.create({
  baseURL: "https://recruitment.dev.rollingglory.com/api/v2/",
  headers: {
    "Content-type": "application/json",
  },
});

export default http;
