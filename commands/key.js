const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/keyManager');
const {isRequired} = require('../utils/validation');

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message : 'enter API key'.green + 'https://nomics.com',
                validate: isRequired
            }
        ]);
        const key = keyManager.setKey(input.key);
        if(key) console.log('API key set'.blue);
    },
    show() {
        try{
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('current API key: ' + key.yellow);
            return key;
        } catch(err){ console.error(err.message.red) };
    },
    remove() {
        try{
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log('key removed'.blue);
            return;
        } catch(err){ console.error(err.messager.red) };
    }
};

module.exports = key;