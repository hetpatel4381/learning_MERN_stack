import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

export const fetchData = async () => {
  const url = "/api/data";
  console.log("Request URL: ", url);
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};
