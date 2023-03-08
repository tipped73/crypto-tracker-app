const CryptoAPI = require("../lib/cryptoAPI");
const KeyManager = require("../lib/keyManager");

const check = {
    async price(cmd){
        try{
            keyManager = new KeyManager();
            const key = keyManager.getKey();
            const api = new CryptoAPI(key);
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.curr);
            console.log(priceOutputData);
        } catch(err) { console.log(err.message.red) }
    }
}

module.exports = check;