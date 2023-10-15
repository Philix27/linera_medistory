use async_graphql::SimpleObject;
use linera_sdk::base::Timestamp;
use serde::{Deserialize, Serialize};

use super::key::Key;

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
