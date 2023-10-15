#![cfg_attr(target_arch = "wasm32", no_main)]

mod state;

use self::state::MedPlus;
use async_graphql::extensions::*;
use async_graphql::EmptySubscription;
use async_graphql::Schema;
use async_trait::async_trait;
use medplus::Operation;
// use haclin::Operation;
use linera_sdk::{base::WithServiceAbi, QueryContext, Service, ViewStateStorage};
use std::sync::Arc;
use thiserror::Error;

linera_sdk::service!(MedPlus);

impl WithServiceAbi for MedPlus {
    type Abi = medplus::ApplicationAbi;
}

#[async_trait]
impl Service for MedPlus {
    type Error = ServiceError;
    type Storage = ViewStateStorage<Self>;

    async fn query_application(
        self: Arc<Self>,
        _context: &QueryContext,
        _query: Self::Query,
    ) -> Result<(), Self::Error> {
        let schema =
            Schema::build(self.clone(), Operation::mutation_root(), EmptySubscription).finish();
        let response = schema.execute(request).await;
        Ok(response)
    }
}

/// An error that can occur while querying the service.
#[derive(Debug, Error)]
pub enum ServiceError {
    /// Query not supported by the application.
    #[error("Queries not supported by application")]
    QueriesNotSupported,

    /// Invalid query argument; could not deserialize request.
    #[error("Invalid query argument; could not deserialize request")]
    InvalidQuery(#[from] serde_json::Error),
    // Add error variants here.
}
