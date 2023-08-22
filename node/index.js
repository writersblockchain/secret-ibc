import { SecretNetworkClient, Wallet } from "secretjs";
import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const wallet = new Wallet(process.env.MNEMONIC);

const contract_wasm = fs.readFileSync("./contract.wasm.gz");
// const codeId = 710;
// const contractCodeHash =
//   "951cbc1b87b3d360f9a18aaf3fe152a2777bd0d5b595c1509f0980ef45441a36";

// const contractAddress = "secret1pjel0vvsz4nt3w5vrqkaaxscaxnlum8f7cjala";

const secretjs = new SecretNetworkClient({
  chainId: "secretdev-1",
  url: "http://localhost:9090",
  wallet: wallet,
  walletAddress: wallet.address,
});

let upload_contract = async () => {
  let tx = await secretjs.tx.compute.storeCode(
    {
      sender: wallet.address,
      wasm_byte_code: contract_wasm,
      source: "",
      builder: "",
    },
    {
      gasLimit: 4_000_000,
    }
  );
  console.log(tx);

  //   const codeId = Number(
  //     tx.arrayLog.find((log) => log.type === "message" && log.key === "code_id")
  //       .value
  //   );

  //   console.log("codeId: ", codeId);

  //   const contractCodeHash = (
  //     await secretjs.query.compute.codeHashByCodeId({ code_id: codeId })
  //   ).code_hash;
  //   console.log(`Contract hash: ${contractCodeHash}`);
};

upload_contract();

// let instantiate_contract = async () => {
//   const initMsg = {};
//   let tx = await secretjs.tx.compute.instantiateContract(
//     {
//       code_id: codeId,
//       sender: wallet.address,
//       code_hash: contractCodeHash,
//       init_msg: initMsg,
//       label: "ibc hooks" + Math.ceil(Math.random() * 10000),
//     },
//     {
//       gasLimit: 400_000,
//     }
//   );

//   //Find the contract_address in the logs
//   const contractAddress = tx.arrayLog.find(
//     (log) => log.type === "message" && log.key === "contract_address"
//   ).value;

//   console.log(contractAddress);
// };

// instantiate_contract();
