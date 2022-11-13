import axios from "axios";
import { useState, useEffect } from "react";
import Cancion from "./Cancion";

const dbApi = {
  method: "GET",
  url: "https://noco-db-production-4794.up.railway.app/api/v1/db/data/noco/p_hogktwcofm3u2d/OctavaUrbanaCsv/views/Gallery-1",
  params: { offset: "0", limit: "25", where: "" },
  headers: {
    "xc-auth":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpb29kZXZAcHJvdG9ubWFpbC5jb20iLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6InVzX3NjMzRmbWl1OHM1aW52Iiwicm9sZXMiOiJ1c2VyLHN1cGVyIiwidG9rZW5fdmVyc2lvbiI6Ijk3MTQ0ZTBiNGQ5YzhiN2M3NjZmNjNmZGYwMWE1ZmMzNmI0MzI1MjI3YWI3ODE3ZjE0YjA4MzM4MDAwZDMyNWE1YmI2OWUwODUzYzM0MDM0IiwiaWF0IjoxNjY4MzU0MzE1LCJleHAiOjE2NjgzOTAzMTV9.Ba1pVN7G5Y1edYv9qqKvm_-_x30_gUDdug3jwNoeqSc",
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
        return i < 10 ? <Cancion key={i} datos={datosCancion} /> : null;
      })}
    </div>
  );
}
export default Ranking;
