module.exports = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "purpose",
        "type": "string"
      }
    ],
    "name": "SetPurpose",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "purpose",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newPurpose",
        "type": "string"
      }
    ],
    "name": "setPurpose",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];