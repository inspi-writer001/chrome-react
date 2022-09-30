import React, { useEffect, useState } from "react";
import axios from "axios";

const Body = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://google.com").then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);
  return <div>data:::{data}</div>;
};

export default Body;
