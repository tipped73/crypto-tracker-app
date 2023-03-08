const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('check the price')
    .option('--coin <type>', 'add specific coin types', 'BTC,ETH,XRP')
    .option('--curr <currency>', 'change the currency', 'USD')
    .action((cmd) => check.price(cmd));

program.parse(process.argv);