import React, { useState } from "react";

const SearchForm = ({ setIpData, infoIp }) => {
  const { ip, country_name, city, postal, org, timezone, utc_offset } = infoIp;
  const [ipInput, setIpInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIpData(ipInput);
  };

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
            {country_name}, {city} - ZIP {postal}
          </p>
          <label>TimeZone</label>
          <p>
            {timezone} | {utc_offset}
          </p>
          <label>ISP</label>
          <p>{org}</p>
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
