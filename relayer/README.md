1. docker compose up

```

2. Add keys to hermes

```

hermes keys add --chain 'secretdev-1' --mnemonic-file './c.mnemonic'

```

```

hermes keys add --chain 'secretdev-2' --mnemonic-file './c.mnemonic'

```

3.

hermes create client --host-chain secretdev-1 --reference-chain secretdev-2

4.

```

docker ps

```

5.

```

hermes keys balance --chain secretdev-1
hermes keys balance --chain secretdev-2

```

6.

ADDRESS=secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3
secretcli query bank balances secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3

docker exec -it localsecret-1 secretd tx bank send a ${ADDRESS} 1000000000uscrt -y

docker exec -it localsecret-2 secretd tx bank send a ${ADDRESS} 1000000000uscrt -y

hermes create channel --a-chain secretdev-1 --b-chain secretdev-2 --a-port transfer --b-port transfer --new-client-connection --yes





```

snip address = secret15k9rjfpu4jhfwtgdgswpy46fa4s0af54ncgwmk

hermes create client --host-chain secretdev-1 --reference-chain secretdev-2
hermes create client --host-chain secretdev-2 --reference-chain secretdev-1
hermes create connection --a-chain secretdev-2 --a-client 07-tendermint-5 --b-client 07-tendermint-5

hermes create channel --a-chain secretdev-2 --a-connection connection-8 --a-port transfer --b-port transfer

secretcli q bank balances secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3 --chain-id=secretdev-2

secretcli tx ibc-transfer transfer transfer channel-1 secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3 200uscrt --chain-id=secretdev-1 --from=c -y

secretcli query tx 33116AD03F3CA7714A0262170C9EA0E5A359FE1FFF8D613E64161F662BCE4C0B

secretcli tx ibc-transfer transfer transfer channel-0 secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3 6uscrt --from c

q bank balances

secretcli q bank balances secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3

1.  docker compose up

2.  ADDRESS=secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3
    docker exec -it localsecret-1 secretd tx bank send a ${ADDRESS} 1000000000uscrt -y
    docker exec -it localsecret-2 secretd tx bank send a ${ADDRESS} 1000000000uscrt -y

3.  hermes create channel --a-chain secretdev-1 --b-chain secretdev-2 --a-port transfer --b-port transfer --new-client-connection
    hermes start

4.

secretcli config node http://localhost:26657
secretcli q bank balances secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3
secretcli tx ibc-transfer transfer transfer channel-0 secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3 1000000uscrt --from c

5.  secretcli config node http://localhost:36657
    secretcli q bank balances secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3

6.

secretcli tx ibc-transfer transfer transfer channel-0 secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3 1003709uscrt --from c

secretcli query tx
