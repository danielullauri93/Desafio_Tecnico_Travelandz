import { FaUser } from "react-icons/fa";
import "./transfer.css";

const Transfer = () => {
  return (
    <div className="transferContainer">
      <form className="transferContainerInputs">
        <div className="transferInputs">
          <label className="transferInputs-label">
            <h3>Origen</h3>
          </label>
          <input
            icon={<FaUser />}
            type="text"
            className="transferInput"
            placeholder="Ingrese lugar de salida"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <h3>Destino</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Ingrese lugar de destino"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <h3>Fecha de llegada</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Fecha de llegada"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <h3>Hora de llegada</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Hora de llegada"
          />
        </div>

        <div className="transferInputs">
          <label className="transferInputs-label">
            <h3>Numero de personas</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Ingrese cuantas personas son"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <h3>Categoria</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Categoria"
          />
        </div>
        <div className="transferInputs">
          <label className="transferInputs-label">
            <h3>Tipo de traslado</h3>
          </label>
          <input
            type="text"
            className="transferInput"
            placeholder="Tipo de traslado"
          />
        </div>
        <div className="transferInputs">
          <button className="transferButton">Solicitar</button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
