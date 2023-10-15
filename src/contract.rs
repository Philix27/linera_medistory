#![cfg_attr(target_arch = "wasm32", no_main)]

mod case_note;
mod errors;
mod state;

use self::state::Medistory;
use async_trait::async_trait;
use errors::ContractError;
use linera_sdk::{
    base::{ChannelName, Destination, SessionId, WithContractAbi},
    contract::system_api,
    ApplicationCallResult, CalleeContext, Contract, ExecutionResult, MessageContext,
    OperationContext, SessionCallResult, ViewStateStorage,
};
use medistory::case_note::key::Key;
use medistory::case_note::note::OwnFile;
use medistory::Message;
linera_sdk::contract!(Medistory);

/// The channel name the application uses for cross-chain messages about new posts.
const POSTS_CHANNEL_NAME: &[u8] = b"posts";
/// The number of recent posts sent in each cross-chain message.
const RECENT_POSTS: usize = 10;

impl WithContractAbi for Medistory {
    type Abi = medistory::MedistoryAbi;
}

#[async_trait]
impl Contract for Medistory {
    type Error = ContractError;
    type Storage = ViewStateStorage<Self>;

    async fn initialize(
        &mut self,
        _context: &OperationContext,
        _argument: Self::InitializationArgument,
    ) -> Result<ExecutionResult<Self::Message>, Self::Error> {
        Ok(ExecutionResult::default())
    }

    async fn execute_operation(
        &mut self,
        _context: &OperationContext,
        _operation: Self::Operation,
    ) -> Result<ExecutionResult<Self::Message>, Self::Error> {
        Ok(ExecutionResult::default())
    }

    async fn execute_message(
        &mut self,
        _context: &MessageContext,
        _message: Self::Message,
    ) -> Result<ExecutionResult<Self::Message>, Self::Error> {
        Ok(ExecutionResult::default())
    }

    async fn handle_application_call(
        &mut self,
        _context: &CalleeContext,
        _call: Self::ApplicationCall,
        _forwarded_sessions: Vec<SessionId>,
    ) -> Result<ApplicationCallResult<Self::Message, Self::Response, Self::SessionState>, Self::Error>
    {
        Ok(ApplicationCallResult::default())
    }

    async fn handle_session_call(
        &mut self,
        _context: &CalleeContext,
        _session: Self::SessionState,
        _call: Self::SessionCall,
        _forwarded_sessions: Vec<SessionId>,
    ) -> Result<SessionCallResult<Self::Message, Self::Response, Self::SessionState>, Self::Error>
    {
        Err(ContractError::SessionsNotSupported)
    }
}

impl Medistory  {
    async fn execute_post_operation(
        &mut self,
        text: String,
    ) -> Result<ExecutionResult<Message>, errors::ContractError> {
        let timestamp = system_api::current_system_time();
        self.own_posts.push(OwnFile { timestamp, text });
        let count = self.own_posts.count();

        let mut posts: Vec<OwnFile> = vec![];

        for index in (0..count).rev().take(RECENT_POSTS) {
            let maybe_post = self.own_posts.get(index).await;
            let own_post = maybe_post
                .expect("post with valid index missing; this is a bug in the social application!");

            match own_post {
                Some(val) => {
                    posts.push(val);
                }
                None => {}
            }
        }

        let count = count as u64;
        let dest = Destination::Subscribers(ChannelName::from(POSTS_CHANNEL_NAME.to_vec()));
        Ok(ExecutionResult::default().with_message(
            dest,
            Message::CaseNotes {
                count,
                posts: posts,
            },
        ))
    }

    fn execute_posts_message(
        &mut self,
        context: &MessageContext,
        count: u64,
        posts: Vec<OwnFile>,
    ) -> Result<(), errors::ContractError> {
        for (index, post) in (0..count).rev().zip(posts) {
            let key = Key {
                timestamp: post.timestamp,
                author: context.message_id.chain_id,
                index,
            };
            self.received_posts.insert(&key, post.text);
        }
        Ok(())
    }
}
