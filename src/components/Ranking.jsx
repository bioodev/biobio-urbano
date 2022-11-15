import axios from "axios";
import { useState, useEffect } from "react";
import Cancion from "./Cancion";

const dbApi = {
  method: "GET",
  url: "https://noco-db-production-4794.up.railway.app/api/v1/db/data/noco/p_hogktwcofm3u2d/OctavaUrbanaCsv/views/Gallery-1",
  params: { offset: "0", limit: "25", where: "" },
  headers: {
    "xc-token": "ZR0q1T5Z5CSj6OL3c4NX8m8SOPrdq6nEiw_okl73",
  },
};

function Ranking() {
  const [datos, actualizarDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = () => {
      axios
        .request(dbApi)
        .then(function (res) {
          actualizarDatos(res.data.list);
        })
        .catch(function (err) {
          console.error(err);
        });
    };
    obtenerDatos();
  }, []);

  return (
    <div className="m-9 inline-grid grid-cols-1 gap-9 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {datos.length === 0 && <p>cargando... </p>}
      {datos.map((datosCancion, i) => {
        return i < 25 ? <Cancion key={i} datos={datosCancion} /> : null;
      })}
    </div>
  );
}
export default Ranking;
