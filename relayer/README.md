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

secretcli query bank balances secret1he7t2wxzpmfuxfrw7qjg52vu4qljq3l53k7uf3

docker exec -it localsecret-1 secretd tx bank send a ${ADDRESS} 1000000000uscrt -y

docker exec -it localsecret-2 secretd tx bank send a ${ADDRESS} 1000000000uscrt -y

hermes create channel --a-chain secretdev-1 --b-chain secretdev-2 --a-port transfer --b-port transfer --new-client-connection --yes
```
