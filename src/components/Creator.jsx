import { useState } from "react";

const Creator = ({ createWallet }) => {
  const [eth, setEth] = useState(0);
  const [address, setAddress] = useState("");

  const handleSave = () => {
    createWallet(address, eth);
    setEth(0);
    setAddress("");
  };

  return (
    <form style={{ height: "40px" }} className="mt-2">
      <div className="row mb-4">
        <div className="row align-items-center col-2" style={{ minHeight: "40px" }}>
          <div className="col-md-12">
            <b>Getter address</b>
          </div>
        </div>

        <div className="col-4">
          <div className="form-outline">
            <input
              type="text"
              className="form-control"
              placeholder="Getter address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="row align-items-center col-1" style={{ minHeight: "40px" }}>
          <div className="col-md-12">
            <b>ETH</b>
          </div>
        </div>

        <div className="col-4">
          <div className="form-outline">
            <input
              type="number"
              className="form-control"
              value={eth}
              placeholder="ETH"
              onChange={e => setEth(e.target.value)}
            />
          </div>
        </div>
        <div className="col-1">
          <button
            className="btn btn-primary"
            onClick={handleSave}
            type="button"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default Creator;
