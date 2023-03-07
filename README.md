<div align="center">
  <h1 align="center">SphereOne - Bundler</h1>
</div>

<div align="center">
<img src="https://media.licdn.com/dms/image/C560BAQFovqG0I17e-w/company-logo_200_200/0/1674070329709?e=1686182400&v=beta&t=BzC3OwzVuZfSf-ky7xJhB847kvvtn1ERoze5g2aHcRU">
</div>

## Bundler

A basic eip4337 "bundler"

This is a reference implementation for a bundler, implementing the full EIP-4337
RPC calls (both production and debug calls), required to pass the [bundler-spec-tests](https://github.com/eth-infinitism/bundler-spec-tests) test suite.

### Usage:

1. run `yarn && yarn preprocess`
2. deploy contracts with `yarn hardhat-deploy --network <network_Name>`
3. run `yarn run bundler`

Now your bundler is active on local url http://localhost:3000/rpc

To run a simple test, do `yarn run runop --deployFactory --network localhost`

NOTE: if running on a testnet, you need to supply the bundler (and runop) the network and mnemonic file, e.g.

`yarn run bundler --network localhost --mnemonic file.txt`

To run the full test bundler spec test suite, visit https://github.com/eth-infinitism/bundler-spec-tests
