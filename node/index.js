import {
  Wallet,
  SecretNetworkClient,
  EncryptionUtilsImpl,
  fromUtf8,
  MsgExecuteContractResponse,
} from "secretjs";
import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const wallet = new Wallet(process.env.MNEMONIC);
let contractAddress = "secret15k9rjfpu4jhfwtgdgswpy46fa4s0af54ncgwmk";
let contractCodeHash =
  "c74bc4b0406507257ed033caa922272023ab013b0c74330efc16569528fa34fe";

const secretjs = new SecretNetworkClient({
  chainId: "secretdev-1",
  url: "http://localhost:9090",
  wallet: wallet,
  walletAddress: wallet.address,
});

const viewing_key = async () => {
  // Entropy: Secure implementation is left to the client, but it is recommended to use base-64 encoded random bytes and not predictable inputs.
  const entropy = "Another really random thing";

  let handleMsg = { create_viewing_key: { entropy: entropy } };
  console.log("Creating viewing key");
  tx = await secretjs.tx.compute.executeContract(
    {
      sender: wallet.address,
      contract_address: contractAddress,
      code_hash: contractCodeHash, // optional but way faster
      msg: handleMsg,
      sent_funds: [], // optional
    },
    {
      gasLimit: 100_000,
    }
  );

  // Convert the UTF8 bytes to String, before parsing the JSON for the api key.
  const apiKey = JSON.parse(
    fromUtf8(MsgExecuteContractResponse.decode(tx.data[0]).data)
  ).create_viewing_key.key;
  console.log(apiKey);
};
viewing_key();
