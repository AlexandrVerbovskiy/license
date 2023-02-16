import { transformBalance } from "../utils";
import { useContext } from "react";
import web3Context from "../context/web3Context";

const Header = ({ account, balance }) => {
  const { web3 } = useContext(web3Context);

  return (
    <div className="mb-4">
      <h1 className="text-center mt-4">Wallets</h1>
      <div className="text-end">
        <b>Account:</b> {account}
      </div>
      <div className="text-end">
        <b>Balance:</b> {transformBalance(web3, balance)} EHT
      </div>
    </div>
  );
};

export default Header;
