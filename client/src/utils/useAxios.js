import { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook using Axios
export const useAxios = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        setInfo(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  return [info];
};