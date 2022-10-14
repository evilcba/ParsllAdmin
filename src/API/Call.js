import React, { useEffect, useState } from "react";
import fetchData from "../../../API/Fetch";

import React from "react";

export default function Sidebar() {
  const [APIData, setAPIData] = useState(null);

  useEffect(() => {
    console.log("sideabr mounted or unmounted ");
    let data = fetchData(
      "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    );
    console.log("data is", data);
    // should be array
    setAPIData(data);
  }, []);

  return (
    <>
      <h1>front end here</h1>

      {/* // use use your data APIData by mapping if it is in array or simply use the state  */}
      {APIData && APIData.map((data) => <div>Sidebar{data}</div>)}
    </>
  );
}
