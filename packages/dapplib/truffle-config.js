require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy random stereo eternal grace local bottom gift'; 
let testAccounts = [
"0xb97284d24e097d99307243d3d36f72886b041c7eb09dfae5dbbfc9a6ad65be11",
"0x657a0ed72e9f6d76b3456be711b69f3fbd0654faacd6a48de84c05daa7182da5",
"0x62dd4aa9a3e73063fd771db13fd3293becb70534d1a8f6bb442683f829d6bacd",
"0x949c1e195e6eea8425c6fd9b2ba06a60d9215b7809216f1bcb14ee4705b5cc59",
"0xf64d35a0aff7021d511bc38a381137d6962f467142e08a0445a1a97e8ee39ba6",
"0x0ba35a3aad053c0c13c76fdd2ecf99533de63d68273802201492a0e5c3542280",
"0x70e90402864530516ccbe3c0d873f7fa6d77638716479de0dc06b55a232214b2",
"0x019ccd93abce066d8707f63921bc91f0d47cf1cdfb0655cd55398b76f26d1cd4",
"0x4227db0c493b716d03efc0e96c3732bb502ab1d38347e3627ddc4e48d92e4422",
"0x6961a40f42b1e607372f418b1270774a5a87e078641b6c4cd8373b0821379ffe"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

