pub mod case_note;
// mod state_pay;
use async_graphql::InputObject;
use linera_sdk::{
    base::{Amount, ChainId, ContractAbi, Owner, ServiceAbi},
    graphql::GraphQLMutationRoot,
};
use serde::{Deserialize, Serialize};

pub struct MedplusAbi;

//   - Defines the application's abi
// linera project publish-and-create --json-argument "null"
impl ContractAbi for MedplusAbi {
    type Parameters = ();
    type InitializationArgument = ();
    type Operation = ();
    type Message = Messages;
    type ApplicationCall = ();
    type SessionCall = ();
    type SessionState = ();
    type Response = ();
}

impl ServiceAbi for MedplusAbi {
    type Parameters = ();
    type Query = ();
    type QueryResponse = ();
}

pub enum Operation {
    Transfer {
        owner: Owner,
        amount: Amount,
        target_account: Account,
    },
    mutation_root(),
}

#[derive(Debug, Deserialize, Serialize, GraphQLMutationRoot)]
pub enum Messages {
    AddCaseNote { cc: String },
}

#[derive(
    Debug,
    Deserialize,
    Serialize,
    // GraphQLMutationRoot,
    InputObject,
    Clone,
    Copy,
    PartialEq,
    Eq,
    PartialOrd,
    Ord,
)]
pub struct Account {
    pub chain_id: ChainId,
    pub owner: Owner,
}
