1. upload snip20 code:
   secretcli tx compute store contract.wasm.gz --gas 5000000 --from c --chain-id secretdev-1

2. instantiate snip20 code:

random_bytes=$(openssl rand -base64 32)
secretcli tx compute instantiate 1 '{
  "name": "Secret Secret",
  "symbol": "sSCRT",
  "decimals": 6,
  "prng_seed": "'"$random_bytes"'",
"admin": "secret1ajz54hz8azwuy34qwy9fkjnfcrvf0dzswy0lqq",
"initial_balances": [
{
"address": "secret1ajz54hz8azwuy34qwy9fkjnfcrvf0dzswy0lqq",
"amount": "1000000000"
}
],
"supported_denoms": ["ibc/834829648E6B51B21713C76E0C1836727DCE221CE3DC8B3AA7BB11F55428887A"]
}' --from c --label snip20 -y

3. upload wrap contract:
   secretcli tx compute store contract1.wasm.gz --gas 5000000 --from c --chain-id secretdev-1

   "code_id": 3,
   "code_hash": "951cbc1b87b3d360f9a18aaf3fe152a2777bd0d5b595c1509f0980ef45441a36",

   4. instantiate wrap contract:

secretcli tx compute instantiate 3 '{}' --from c --label wrap-ibc -y

wrap-contract-address: "secret1c39jrqcnmtmgkhuercylmhus4hjkl2j8qjn9aj"

5.

secretcli config node http://localhost:26657
secretcli config chain-id secretdev-1
secretcli config keyring-backend test
secretcli config output json

secretcli keys list

secretcli query tx E6AB9E61DC18E99937E5F3206E70850148681656436EBD9DC8F80E1D9AB5A18F

secretcli query compute list-code
secretcli query compute list-contract-by-code 1

snip-20_contract_address: "secret15k9rjfpu4jhfwtgdgswpy46fa4s0af54ncgwmk"
"code_id": 1
"code_hash": "c74bc4b0406507257ed033caa922272023ab013b0c74330efc16569528fa34fe"
