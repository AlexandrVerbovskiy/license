export const updateBalance = (res, getter, account, setWallets) => {
  const balance = res.events.savedETH.returnValues.newETH;
  setWallets(prev => {
    const res = prev.map(wallet => {
      const newObj = { ...wallet };
      if (newObj.getter == getter && newObj.sender == account)
        newObj.count = balance;
      return newObj;
    });
    return res;
  });
};

export const transformBalance = (web3, count) => {
  if (web3) return web3.utils.fromWei(`${count}`);
  return 0;
};
