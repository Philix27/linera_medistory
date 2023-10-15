pub mod case_note;
use async_graphql::{InputObject, SimpleObject};
use case_note::note::OwnPost;
use linera_sdk::{
    base::{ChainId, ContractAbi, ServiceAbi, Timestamp},
    graphql::GraphQLMutationRoot,
};
use linera_views::{common::CustomSerialize, views};
use serde::{Deserialize, Serialize};

pub struct MedistoryAbi;

// linera project publish-and-create --json-argument "null"
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
    CaseNotes { count: u64, posts: Vec<OwnPost> },
}

