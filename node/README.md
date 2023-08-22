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
]
}' --from c --label snip20 -y

secretcli config node http://localhost:26657
secretcli config chain-id secretdev-1
secretcli config keyring-backend test
secretcli config output json

secretcli keys list

secretcli query tx 56FCD9CD33D1AA0F2886CA81B5CC32B5E4CAE9D665B0240559A419ADAD41597D

secret15k9rjfpu4jhfwtgdgswpy46fa4s0af54ncgwmk
