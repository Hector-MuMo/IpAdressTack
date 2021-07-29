import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Maps";
import SearchForm from "./components/SearchForm";

const KEY = "2c33a5927185030326ffd62e614573e0";

function App() {
  const [ipData, setIpData] = useState("");
  const [infoIp, setInfoIp] = useState(false);

  //CheckLocalIP
  useEffect(() => {
    const getLocalIp = async () => {
      const data = await fetch(
          `http://api.ipstack.com/check?access_key=${KEY}`
        ),
        json = await data.json();

      setInfoIp(json);
    };

    getLocalIp();
  }, []);

  //CheckInputIP
  useEffect(() => {
    const getInputIp = async () => {
      const data = await fetch(
          `http://api.ipstack.com/${ipData}?access_key=${KEY}`
        ),
        json = await data.json();

      setInfoIp(json);
    };

    getInputIp();
  }, [ipData]);

  return (
    <div>
      <SearchForm setIpData={setIpData} infoIp={infoIp} />
      <Map infoIp={infoIp} />
    </div>
  );
}

export default App;
