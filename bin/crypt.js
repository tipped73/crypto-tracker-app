#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key', 'get API key at https://nomics.com')
    .command('check', 'get coin info')
    .parse(process.argv);