import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchDataFromServer();
  }, []);

  return (
    <>
      <h1>React + Express App</h1>
      {data && <p>Data from server: {data.message}</p>}
    </>
  );
}

export default HomePage;
