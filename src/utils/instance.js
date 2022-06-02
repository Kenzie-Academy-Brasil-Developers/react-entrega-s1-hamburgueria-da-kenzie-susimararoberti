import axios from "axios";

const instance = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
