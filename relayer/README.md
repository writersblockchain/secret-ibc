1. docker compose up

2. Add keys to hermes

```
hermes keys add --chain 'secretdev-1' --mnemonic-file './50s03.mnemonic'
```

```
hermes keys add --chain 'secretdev-2' --mnemonic-file './50s03.mnemonic'
```

3.

hermes create client --host-chain secretdev-1 --reference-chain secretdev-2
