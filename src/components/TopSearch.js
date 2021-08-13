import React, { useEffect, useState } from "react";
import axios from "axios";

const TopSearch = () => {
  const [searches, setSearches] = useState([]);
  useEffect(() => {
    const search = [];
    axios
      .get("https://6112b33c89c6d00017ac04d9.mockapi.io/Topsearches")
      .then((response) => {
        response.data.map((details) => {
          search.push(details);
          return null;
        });
        setSearches(search);
      });
  }, []);

  return (
    <div>
      {searches.map((item, idx) => {
        return (
          <p key={idx}>
            {item.id}. {item.search}{" "}
            <span style={{ float: "right" }}>{item.count}</span>
          </p>
        );
      })}
    </div>
  );
};
export default TopSearch;
