# CLI crypto tracker app

Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://coinlayer.com

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
crypto -h

# Version
crypto -V

# API Key Commands
crypto key set
crypto key show
crypto key remove

# Crypto Check Commands
crypto check price

# Check Specific Coins (default: BTN,ETH,XRP)
crypto check --coin=BTC,ETH

# Choose Currency (Default: USD)
crypto check --cur=EUR
```

### Version

1.0.0

### License

MIT
