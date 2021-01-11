import { useState, useEffect } from "react";

function DevForm({ onSubmit }) {
  async function handleSubmit(e) {
    //e.preventDefault();
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });
    setTechs("");
    setGithubusername("");
  }

  const [github_username, setGithubusername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuario do Github</label>
        <input
          type="text"
          className="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={(e) => setGithubusername(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          type="text"
          className="techs"
          id="techs"
          required
          value={techs}
          onChange={(e) => setTechs(e.target.value)}
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">latitude</label>
          <input
            type="number"
            className="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            className="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;
