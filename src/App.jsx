import useInit from "./hooks/useInit";
import web3Context from "./context/web3Context";
import Creator from "./components/Creator";
import Table from "./components/Table";
import Header from "./components/Header";
import "./App.css";

const getValue = (res, nameEmit, paramEmit) => {
  return res.events[nameEmit].returnValues[paramEmit];
};

function App() {
  const {
    web3,
    account,
    contract,
    wallets,
    getWallets,
    updateBalance,
    balance
  } = useInit();

  const handleSendMoney = async (moneySend, getter, ignoreRes = false) => {
    const sendedWei = web3.utils.toWei(`${moneySend}`, "ether");
    const res = await contract.methods
      .saveETH(getter)
      .send({ from: account, value: sendedWei });
    if (!ignoreRes) updateBalance(res, getter);
    return res;
  };

  const handleGiveMoney = async (moneyGive, getter) => {
    const givedWei = web3.utils.toWei(`${moneyGive}`, "ether");
    const res = await contract.methods
      .putETH(getter, givedWei)
      .send({ from: account });
    updateBalance(res, getter);
  };

  const createWallet = async (address, eth) => {
    const res = await handleSendMoney(eth, address, true);
    getWallets();
    updateBalance(res, address);
  };

  return (
    <web3Context.Provider
      value={{
        web3,
        sendMoney: handleSendMoney,
        getMoney: handleGiveMoney
      }}
    >
      <div className="container">
        <Header account={account} balance={balance} />
        <Creator createWallet={createWallet} />
        <Table wallets={wallets} />
      </div>
    </web3Context.Provider>
  );
}

export default App;
