import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-dac7c.firebaseio.com/",
});

export default instance;
