import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinoService from "../../services/DestinoService";

export default function Index() {
  const [destino, setDestino] = useState([]);

  const getAllDestino = () => {
    DestinoService.getAllDestino()
      .then((response) => {
        setDestino(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDestino();
  }, []);

  const deleteDestino = (idDestino) => {
    DestinoService.deleteDestino(idDestino)
      .then((response) => {
        getAllDestino();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Destino</h1>
      </header>
      <div className="container p-5">
        <Link to="/Destino-Create" className="btn btn-primary mb-2">
          Criar Destino
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>LugarDestino</th>
                <th>DiaPartida</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {destino.map((destino) => (
                <tr key={destino.idDestino}>
                  <td>{destino.idDestino}</td>
                  <td>{destino.lugarDestino}</td>
                  <td>{destino.diaPartida}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Destino-Update/${destino.idDestino}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteDestino(destino.idDestino)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
