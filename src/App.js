// src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://example.com/user")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Data from MSW</h1>
      <p>{data.id}</p>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
    </div>
  );
}

export default App;
