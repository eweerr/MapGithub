import "./App.css";
import "./Sidebar.css";
import "./global.css";
import "./Main.css";

import { useEffect, useState } from "react";

import api from "./services/Api";
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleSubmit(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);

    console.log(response.data);
  }

  return (
    <div className="App" id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSubmit} />
      </aside>
      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
