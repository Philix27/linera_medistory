#![cfg_attr(target_arch = "wasm32", no_main)]

mod errors;
mod state;

use self::state::Medistory;
// use async_graphql::EmptySubscription;
// use async_graphql::Schema;
use async_trait::async_trait;
use errors::ServiceError;
// use medplus::Operation;
use linera_sdk::{base::WithServiceAbi, QueryContext, Service, ViewStateStorage};
use std::sync::Arc;

linera_sdk::service!(Medistory);

impl WithServiceAbi for Medistory {
    type Abi = medistory::MedistoryAbi;
}

#[async_trait]
impl Service for Medistory {
    type Error = ServiceError;
    type Storage = ViewStateStorage<Self>;

    async fn query_application(
        self: Arc<Self>,
        _context: &QueryContext,
        _query: Self::Query,
    ) -> Result<(), Self::Error> {
        // let schema =
        //     Schema::build(self.clone(), Operation::mutation_root(), EmptySubscription).finish();
        // let response = schema.execute(request).await;
        // Ok(response)
        Err(ServiceError::NotAValidQuery)
        //  Err(ContractError::SessionsNotSupported)
    }
}
