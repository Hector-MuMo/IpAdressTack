import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Maps";
import SearchForm from "./components/SearchForm";

function App() {
  const [ipData, setIpData] = useState("");
  const [infoIp, setInfoIp] = useState(false);

  //CheckLocalIP
  useEffect(() => {
    const getLocalIp = async () => {
      const data = await fetch(`https://ipapi.co/json/`),
        json = await data.json();
      console.log(json);
      setInfoIp(json);
    };

    getLocalIp();
  }, []);

  //CheckInputIP
  useEffect(() => {
    const getInputIp = async () => {
      const data = await fetch(`https://ipapi.co/${ipData}/json/`),
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
