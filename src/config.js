export const CONTACT_ADDRESS = '0xd1E190f89AefeD80ec31dFb1d389e1F3c9DA2861';

export const CONTACT_ABI = [{
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "internalType": "address",
      "name": "getterAddress",
      "type": "address"
    }],
    "name": "getterAddress",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "internalType": "uint256",
      "name": "newETH",
      "type": "uint256"
    }],
    "name": "savedETH",
    "type": "event"
  },
  {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "addressGettersSenders",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "name": "addressSenders",
    "outputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [{
      "internalType": "address",
      "name": "",
      "type": "address"
    }],
    "name": "countGettersSender",
    "outputs": [{
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "wallets",
    "outputs": [{
      "internalType": "contract UserWallet",
      "name": "",
      "type": "address"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "stateMutability": "payable",
    "type": "receive",
    "payable": true
  },
  {
    "inputs": [],
    "name": "getWallets",
    "outputs": [{
      "components": [{
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "getter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "walletAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "count",
          "type": "uint256"
        }
      ],
      "internalType": "struct NewWallet.WalletStruct[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [{
      "internalType": "address",
      "name": "_getter",
      "type": "address"
    }],
    "name": "saveETH",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [{
        "internalType": "address",
        "name": "_getter",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "name": "putETH",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [],
    "name": "getAddressGettersSenders",
    "outputs": [{
      "internalType": "address[]",
      "name": "",
      "type": "address[]"
    }],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];