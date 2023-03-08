const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey=apiKey;
        this.baseUrl='http://api.coinlayer.com/live?access_key=';
    }
    async getPriceData(coinOption, curOption){
        try{
            const res = await axios.get(`${this.baseUrl}${this.apiKey}&target=${curOption}&symbols=${coinOption}`);
            let output = '';
            for(const coin in res.data.rates) output+=`| coin: ${coin.yellow} | price: ` + `${res.data.rates[coin]}`.green + '| \n';
            return output;
        } catch(err){ console.log(err) }
    }
}

module.exports = CryptoAPI;