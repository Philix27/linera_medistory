use linera_sdk::{
    base::{Amount, Owner},
    views::{MapView, ViewStorageContext},
};
use linera_views::views::{GraphQLView, RootView};
use thiserror::Error;

//   - Defines the application's state
#[derive(RootView, GraphQLView)]
#[view(context = "ViewStorageContext")]
pub struct MedPlus {
    pub accounts: MapView<Owner, Amount>,
}

impl MedPlus {
    pub async fn initialize_accounts(&mut self, owner: Owner, amount: Amount) {
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
    pub async fn credit(&mut self, account: Owner, amount: Amount) {
        let mut bal = self.balance(&account).await;
        bal.saturating_add_assign(amount);
        self.accounts
            .insert(&account, bal)
            .expect("Failed to credit")
    }
    pub async fn withdraw(
        &mut self,
        account: Owner,
        amount: Amount,
    ) -> Result<(), InsufficientBalanceError> {
        let mut balance = self.balance(&account).await;
        balance
            .try_sub_assign(amount)
            .map_err(|_| InsufficientBalanceError)?;
        self.accounts
            .insert(&account, balance)
            .expect("Failed insertion operation");
        Ok(())
    }
}

#[derive(Clone, Copy, Debug, Error)]
#[error("Insufficient balance for transfer")]
pub struct InsufficientBalanceError;
