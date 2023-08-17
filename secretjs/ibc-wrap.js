import { SecretNetworkClient, Wallet } from "secretjs";
import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const sScrtContractAddress = "secret18vd8fpwxzck93qlwghaj6arh4p7c5n8978vsyg";
const wrapDepositContractAddress =
  "secret1pcvs9n8sh80scmrkunaw8cr32de588m6gvg43m";
const myScrtAddress = "secret1f9zykwvwc6jyhv6dtsjwx03e92j08nyffwuwcu";

const secretjs = new SecretNetworkClient({
  chainId: "pulsar-2",
  url: "https://api.pulsar.scrttestnet.com",
  wallet: wallet,
  walletAddress: wallet.address,
});

let send_funds_over_ibc = async () => {
  let tx = await secretjs.tx.ibc.transfer(
    {
      sender: myAddress,
      receiver: wrapDepositContractAddress,
      source_channel: ibcChannelIdOnChain2,
      source_port: "transfer",
      token: stringToCoin("123uscrt"),
      timeout_timestamp: String(Math.floor(Date.now() / 1000) + 10 * 60), // 10 minutes
      memo: JSON.stringify({
        wasm: {
          contract: wrapDepositContractAddress,
          msg: {
            wrap_deposit: {
              snip20_address: sScrtContractAddress,
              recipient_address: myScrtAddress,
            },
          },
        },
      }),
    },
    {
      broadcastCheckIntervalMs: 100,
      gasLimit: 100_000,
      ibcTxsOptions: {
        resolveResponsesCheckIntervalMs: 250,
      },
    }
  );
};

//https://twitter.com/assafmo/status/1682101114320343040/photo/1
