import React, { useState } from "react";

const SearchForm = ({ setIpData, infoIp }) => {
  const { ip, location, city, zip } = infoIp;
  const [ipInput, setIpInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIpData(ipInput);
  };

  let current_time = new Date().toLocaleString();

  return (
    <div className="form-section" style={{ width: "100%", height: "30vh" }}>
      <h2>IP Address Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="IP Address..."
          onChange={(e) => setIpInput(e.target.value)}
          required
        />
        <button></button>
      </form>
      {infoIp ? (
        <article className="info-ip">
          <label>IP Address</label>
          <p>{ip}</p>
          <label>Location</label>
          <p>
            {location.capital}, {city} - ZIP {zip}
          </p>
          <label>TimeZone</label>
          <p>{current_time}</p>
          <label>Country Flag</label>
          <p>{location.country_flag_emoji}</p>
        </article>
      ) : (
        <article className="info-ip">
          <label>IP Address</label>
          <p>- - -</p>
          <label>Location</label>
          <p>- - -</p>
          <label>TimeZone</label>
          <p>- - -</p>
          <label>ISP</label>
          <p>- - -</p>
        </article>
      )}
    </div>
  );
};

export default SearchForm;
