# Constants

HUB_CHAIN_ID="secretdev-1"

sSCRT="secret15k9rjfpu4jhfwtgdgswpy46fa4s0af54ncgwmk"
WRAP_DEPOSIT_CONTRACT_ADDRESS="secret1c39jrqcnmtmgkhuercylmhus4hjkl2j8qjn9aj"
myScrtAddress2="secret1ajz54hz8azwuy34qwy9fkjnfcrvf0dzswy0lqq"

memo=$(echo -n '{"wasm":{"contract":"'$WRAP_DEPOSIT_CONTRACT_ADDRESS'","msg":{"wrap_deposit":{"snip20_address":"'$sSCRT'","recipient_address":"'$myScrtAddress2'"}}}}' | base64)

secretcli tx ibc-transfer transfer transfer channel-0 $sSCRT 1uscrt --memo $memo --from c

secretcli query tx 0D174ECE961C5416050DE2C8B8986828B8FA8C80F0B507C421B7A61A4696FD10

---

secretcli config node http://localhost:26657
secretcli q bank balances secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3
secretcli tx ibc-transfer transfer transfer channel-0 secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3 1uscrt --from c

---

secretcli config node http://localhost:36657
secretcli q bank balances secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3
