import "./transfer.css";

const Transfer = () => {
  return (
    <div className="transferContainer">
      <div className="transferContainerInputs">
        <div className="transferInputs">
          <label htmlFor=""></label>
          <input
            type="text"
            className="transferInput"
            placeholder="From"
          />
        </div>
        <div className="transferInputs"></div>
        <div className="transferInputs"></div>
        <div className="transferInputs"></div>
      </div>
      <div className="transferContainerInputs">
        <div className="transferInputs"></div>
        <div className="transferInputs"></div>
        <div className="transferInputs"></div>
        <div className="transferInputs"></div>
      </div>
    </div>
  );
};

export default Transfer;
