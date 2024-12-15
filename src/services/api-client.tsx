import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f029ee137611406fb883ce62910f4bba",
  },
});
