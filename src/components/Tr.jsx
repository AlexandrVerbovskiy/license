import { useState, useContext } from "react";
import web3Context from "../context/web3Context";
import { transformBalance } from "../utils";

const ButtonTr = ({ state, setState, text, onClick }) =>
  <div className="d-flex">
    <div className="col-6">
      <input
        className="col-10 text-center"
        type="number"
        value={state}
        onChange={e => setState(e.target.value)}
      />
    </div>
    <div className="col-6">
      <button className="col-10 btn btn-light" onClick={onClick}>
        {text}
      </button>
      <div />
    </div>
  </div>;

const Tr = ({ walletAddress, getter, count }) => {
  const [send, setSend] = useState(0);
  const [put, setPut] = useState(0);

  const { web3, sendMoney, getMoney } = useContext(web3Context);

  const handleSend = () => {
    sendMoney(send, getter);
    setSend(0);
  };

  const handlePut = () => {
    getMoney(put, getter);
    setPut(0);
  };

  return (
    <tr>
      <th scope="row">
        {walletAddress}
      </th>
      <td>
        {getter}
      </td>
      <td>
        {transformBalance(web3, count)} ETH
      </td>
      <td>
        <ButtonTr
          state={send}
          setState={setSend}
          text="Send"
          onClick={handleSend}
        />
      </td>
      <td>
        <ButtonTr
          state={put}
          setState={setPut}
          text="Put"
          onClick={handlePut}
        />
      </td>
    </tr>
  );
};

export default Tr;
