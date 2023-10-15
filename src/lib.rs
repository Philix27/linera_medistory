pub mod case_note;
use async_graphql::{InputObject, SimpleObject};
use linera_sdk::{
    base::{ChainId, ContractAbi, Owner, ServiceAbi, Timestamp},
    graphql::{self, GraphQLMutationRoot},
};
use linera_views::{common::CustomSerialize, views};
use serde::{Deserialize, Serialize};

pub struct MedplusAbi;

// linera project publish-and-create --json-argument "null"
impl ContractAbi for MedplusAbi {
    type Parameters = ();
    type InitializationArgument = ();
    type Operation = Operation;
    type Message = Message;
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
    CaseNotes {
        count: u64,
        posts: Vec<OwnPost>,
    },
}

#[derive(Debug, PartialEq, Serialize, Deserialize)]
pub struct OwnCaseNotes {
    pub timestamp: Timestamp,
    pub text: String,
}

/// A post's text and timestamp, to use in contexts where author and index are known.
#[derive(PartialEq, Debug, Clone, Serialize, Deserialize, SimpleObject)]
pub struct OwnPost {
    /// The timestamp of the block in which the post operation was included.
    pub timestamp: Timestamp,
    /// The posted text.
    pub text: String,
}

/// A post on the social app.
#[derive(Clone, PartialEq, Debug, Serialize, Deserialize)]
pub struct Post {
    /// The key identifying the post, including the timestamp, author and index.
    pub key: Key,
    /// The post's text content.
    pub text: String,
}

/// A key by which a post is indexed.
#[derive(Clone, PartialEq, Debug, Serialize, Deserialize, SimpleObject, InputObject)]
#[graphql(input_name = "KeyInput")]
pub struct Key {
    /// The timestamp of the block in which the post was included on the author's chain.
    pub timestamp: Timestamp,
    /// The owner of the chain on which the `Post` operation was included.
    pub author: ChainId,
    /// The number of posts by that author before this one.
    pub index: u64,
}

// Serialize keys so that the lexicographic order of the serialized keys corresponds to reverse
// chronological order, then sorted by author, then by descending index.
impl CustomSerialize for Key {
    fn to_custom_bytes(&self) -> Result<Vec<u8>, views::ViewError> {
        let data = (
            (!self.timestamp.micros()).to_be_bytes(),
            &self.author,
            (!self.index).to_be_bytes(),
        );
        Ok(bcs::to_bytes(&data)?)
    }

    fn from_custom_bytes(short_key: &[u8]) -> Result<Self, views::ViewError> {
        let (time_bytes, author, idx_bytes) = (bcs::from_bytes(short_key))?;
        Ok(Self {
            timestamp: Timestamp::from(!u64::from_be_bytes(time_bytes)),
            author,
            index: !u64::from_be_bytes(idx_bytes),
        })
    }
}


