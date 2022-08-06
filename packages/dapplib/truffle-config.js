require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan repeat noise atom grace clinic bottom gift'; 
let testAccounts = [
"0x48f0cbdbe4ab99c481aa04bf33e6ede3a963252abccb7fae381a5c01ee86b6c7",
"0x91eee6a70c48d94721183fc15ad7cb79a50fd77c45a0f521f699bda64cb9ce19",
"0x253a9c8f0958f651b1b9eb4210d909dc8d688779762f2397d639f6e7187ea2b0",
"0xeb24e165a86082739c318cf971e3a08d86c46798d5b31df01165bdb049012537",
"0x10f6db242f054f7511ee45515e35f69082e2e296f55bbeb411a4392b6cddfd2a",
"0xae96ab8585a6e16c917c56acfb60dec9a0045ba215920113f26627a3342e3838",
"0x783d235224812d06e01e41ef1b6c5bc72b7e488af015d3f1a304ec37c8827419",
"0xa8946604554c96a6cab43f7d0dc9918fd19f9a697444eea720f0343dde5193c6",
"0xae63341b86340f874d1a6e76ba46905ffde595c3448ab47cce933011b9301455",
"0x1a3c81b25d39f965ac7efed31910dc80157bc43cb641304ddfd66bf1fa40eb9e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

