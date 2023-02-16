import Tr from "./Tr";

const Table = ({ wallets }) => {
  return (
    <>
    <h2 className="text-center m-2 mt-4">Table</h2>
    <table className="table table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Contract</th>
          <th scope="col">Getter</th>
          <th scope="col">Count</th>
          <th scope="col">Add</th>
          <th scope="col">Put</th>
        </tr>
      </thead>
      <tbody>
        {wallets.map(wallet => <Tr key={wallet.walletAddress} {...wallet} />)}
      </tbody>
    </table>
    </>
  );
};

export default Table;
