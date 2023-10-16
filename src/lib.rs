pub mod case_note;
use case_note::note::OwnFile;
use linera_sdk::{
    base::{ChainId, ContractAbi, ServiceAbi, Timestamp},
    graphql::GraphQLMutationRoot,
};
use serde::{Deserialize, Serialize};

pub struct MedistoryAbi;

// linera project publish-and-create --json-argument "null"
// Default chain e476187f6ddfeb9d588c7b45d3df334d5501d6499b3f9ad5595cae86cce16a65
impl ContractAbi for MedistoryAbi {
    type Parameters = ();
    type InitializationArgument = ();
    type Operation = Operation;
    type Message = Message;
    type ApplicationCall = ();
    type SessionCall = ();
    type SessionState = ();
    type Response = ();
}

impl ServiceAbi for MedistoryAbi {
    type Parameters = ();
    type Query = ();
    type QueryResponse = ();
}

#[derive(Debug, Serialize, Deserialize, GraphQLMutationRoot)]
pub enum Operation {
    RequestSubscribe(ChainId),
    RequestUnsubscribe(ChainId),
    CaseNote(String),
}

#[derive(Debug, PartialEq, Serialize, Deserialize)]
pub enum Message {
    RequestSubscribe,
    RequestUnsubscribe,
    CaseNotes { count: u64, posts: Vec<OwnFile> },
}
