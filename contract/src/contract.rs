use cosmwasm_std::{
    entry_point, to_binary, CosmosMsg, DepsMut, Env, IbcMsg, IbcTimeout, MessageInfo, Response,
    StdResult,
};

use crate::msg::{IBCLifecycleComplete, InstantiateMsg, Msg};

#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> StdResult<Response> {
    Ok(Response::default())
}

#[entry_point]
pub fn execute(_deps: DepsMut, env: Env, info: MessageInfo, msg: Msg) -> StdResult<Response> {
    match msg {
        Msg::Nop {} => Ok(Response::default()),
        Msg::WrapDeposit {
            snip20_address,
            snip20_code_hash,
            recipient_address,
        } => Ok(Response::default().add_messages(vec![
            CosmosMsg::Wasm(cosmwasm_std::WasmMsg::Execute {
                contract_addr: snip20_address.clone(),
                code_hash: snip20_code_hash.clone(),
                msg: to_binary(&secret_toolkit::snip20::HandleMsg::Deposit { padding: None })
                    .unwrap(),
                funds: info.funds.clone(),
            }),
            CosmosMsg::Wasm(cosmwasm_std::WasmMsg::Execute {
                contract_addr: snip20_address,
                code_hash: snip20_code_hash,
                msg: to_binary(&secret_toolkit::snip20::HandleMsg::Transfer {
                    recipient: recipient_address,
                    amount: info.funds[0].amount,
                    memo: None,
                    padding: None,
                })
                .unwrap(),
                funds: vec![],
            }),
        ])),
        Msg::IBCTransfer {
            channel_id,
            to_address,
            amount,
            timeout_sec_from_now,
        } => Ok(
            Response::default().add_messages(vec![CosmosMsg::Ibc(IbcMsg::Transfer {
                channel_id,
                to_address: to_address,
                amount: amount,
                timeout: IbcTimeout::with_timestamp(
                    env.block.time.plus_seconds(timeout_sec_from_now.u64()),
                ),
                memo: format!(
                    "{{\"ibc_callback\":\"{}\"}}",
                    env.contract.address.to_string()
                ),
            })]),
        ),
        Msg::IBCLifecycleComplete(IBCLifecycleComplete::IBCAck {
            channel,
            sequence,
            ack,
            success,
        }) => Ok(Response::default().add_attributes(vec![
            ("ibc_lifecycle_complete.ibc_ack.channel", channel),
            (
                "ibc_lifecycle_complete.ibc_ack.sequence",
                sequence.to_string(),
            ),
            ("ibc_lifecycle_complete.ibc_ack.ack", ack),
            (
                "ibc_lifecycle_complete.ibc_ack.success",
                success.to_string(),
            ),
        ])),
        Msg::IBCLifecycleComplete(IBCLifecycleComplete::IBCTimeout { channel, sequence }) => {
            Ok(Response::default().add_attributes(vec![
                ("ibc_lifecycle_complete.ibc_timeout.channel", channel),
                (
                    "ibc_lifecycle_complete.ibc_timeout.sequence",
                    sequence.to_string(),
                ),
            ]))
        }
    }
}
