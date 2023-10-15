use linera_sdk::views::{CustomMapView, LogView};
use linera_sdk::{
    base::{Amount, Owner},
    views::{MapView, ViewStorageContext},
};
use linera_views::views::{GraphQLView, RootView};
use medistory::case_note::key::Key;
use medistory::case_note::note::OwnFile;
// use medplus::Key;
use thiserror::Error;

//   - Defines the application's state
#[derive(RootView, GraphQLView)]
#[view(context = "ViewStorageContext")]
pub struct Medistory {
    pub accounts: MapView<Owner, Amount>,
    pub own_posts: LogView<OwnFile>,
    pub received_posts: CustomMapView<Key, String>,
}

impl Medistory {
    pub fn initialize_accounts(&mut self, owner: Owner, amount: Amount) {
        self.accounts
            .insert(&owner, amount)
            .expect("Error in insert statement")
    }
    pub async fn balance(&mut self, account: &Owner) -> Amount {
        self.accounts
            .get(account)
            .await
            .expect("Error in insert statement")
            .unwrap_or_default()
    }
}

#[derive(Clone, Copy, Debug, Error)]
#[error("Insufficient balance for transfer")]
pub struct InsufficientBalanceError;
