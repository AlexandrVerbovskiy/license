import { useEffect, useState } from "react";

import Web3 from "web3";
import {
    CONTACT_ABI,
    CONTACT_ADDRESS,
  } from "../config";

import {updateBalance as updateBalanceUtils} from "../utils";

const useInit = ()=>{

    const [web3, setWeb3] = useState();
    const [account, setAccount] = useState();
    const [balance, setBalance] = useState(0);
    const [contract, setContract] = useState();
    const [gasPrice, setGasPrice] = useState(null);
    const [wallets, setWallets] = useState([]);

    const getWallets = async(gettedContract=null, from = null)=>{
        from = from?from:account;
        gettedContract = gettedContract?gettedContract:contract
        const wallets = await gettedContract.methods.getWallets().call({from: from});
        setWallets(wallets);
      }

    async function load() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
        setWeb3(web3);

        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);

        const walletList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
        setContract(walletList);

        const gasPrice = await web3.eth.getGasPrice();
        setGasPrice(gasPrice);

        const balance = await web3.eth.getBalance(accounts[0]);
        setBalance(balance);
        
        getWallets(walletList, accounts[0]);
      }

    const updateBalance=(res, getter)=> updateBalanceUtils(res, getter,account, setWallets);
    
    useEffect(() => {
        load();
        window.ethereum?.on("accountsChanged", load);
        return () => {
          window.ethereum?.removeListener("accountsChanged", load);
        };
    }, []);

      return {web3, account,contract, wallets,balance, getWallets, updateBalance};
}

export default useInit;