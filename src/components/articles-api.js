import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "4yKS7ti03CDkZBSmRWli3PGmFjeATL3yf--1shu4VWY";

export const getImages = async (topic, currentPage) => {
  const response = await axios.get(`search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      page: currentPage,
      query: topic,
      per_page: 20,
    },
  });
  return response.data.results;
};