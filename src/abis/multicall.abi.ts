export const MulticallAbiEthereum: any = [
    {
        constant: false,
        inputs: [
            {
                components: [
                    { internalType: 'address', name: 'target', type: 'address' },
                    { internalType: 'bytes', name: 'callData', type: 'bytes' },
                ],
                internalType: 'struct Multicall.Call[]',
                name: 'calls',
                type: 'tuple[]',
            },
            { internalType: 'bool', name: 'strict', type: 'bool' },
        ],
        name: 'aggregate',
        outputs: [
            { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
            {
                components: [
                    { internalType: 'bool', name: 'success', type: 'bool' },
                    { internalType: 'bytes', name: 'data', type: 'bytes' },
                ],
                internalType: 'struct Multicall.Return[]',
                name: 'returnData',
                type: 'tuple[]',
            },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
];

export const multicallAbiSei: any = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint8',
                name: 'version',
                type: 'uint8',
            },
        ],
        name: 'Initialized',
        type: 'event',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'target',
                        type: 'address',
                    },
                    {
                        internalType: 'bytes',
                        name: 'callData',
                        type: 'bytes',
                    },
                ],
                internalType: 'struct Multicall.Call[]',
                name: 'calls',
                type: 'tuple[]',
            },
        ],
        name: 'aggregate',
        outputs: [
            {
                internalType: 'uint256',
                name: 'blockNumber',
                type: 'uint256',
            },
            {
                internalType: 'bytes[]',
                name: 'returnData',
                type: 'bytes[]',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'blockNumber',
                type: 'uint256',
            },
        ],
        name: 'getBlockHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'blockHash',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCurrentBlockCoinbase',
        outputs: [
            {
                internalType: 'address',
                name: 'coinbase',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCurrentBlockDifficulty',
        outputs: [
            {
                internalType: 'uint256',
                name: 'difficulty',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCurrentBlockGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: 'gaslimit',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCurrentBlockTimestamp',
        outputs: [
            {
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'addr',
                type: 'address',
            },
        ],
        name: 'getEthBalance',
        outputs: [
            {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getLastBlockHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'blockHash',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'shift',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
];
