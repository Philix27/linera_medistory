use linera_sdk::graphql::GraphQLMutationRoot;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize, GraphQLMutationRoot)]
pub enum CaseNotes {
    AddCaseNote { cc: String },
}
