import { createContext } from "react";

const initContext = {
  web3: null,
  sendMoney: () => {},
  getMoney: () => {}
};

const web3Context = createContext(initContext);

export default web3Context;
