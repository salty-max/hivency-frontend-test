import { Player } from './Player';

export const FETCH_PLAYER_REQUEST = 'FETCH_PLAYER_REQUEST';
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_FAILURE = 'FETCH_PLAYER_FAILURE';
export const ADD_PLAYER_SUCCESS = 'ADD_PLAYER_SUCCESS';
export const ADD_PLAYER_FAILURE = 'ADD_PLAYER_FAILURE';
export const FETCH_TEAM_FAILURE = 'FETCH_TEAM_FAILURE';

interface PlayerAsync {
  loading: boolean,
  player?: Player,
  error: string
}

interface FetchPlayerRequest extends PlayerAsync {
  type: typeof FETCH_PLAYER_REQUEST
}
interface FetchPlayerSuccess extends PlayerAsync {
  type: typeof FETCH_PLAYER_SUCCESS
}
interface FetchPlayerFailure extends PlayerAsync {
  type: typeof FETCH_PLAYER_FAILURE
}
interface AddPlayerSuccess extends PlayerAsync {
  type: typeof ADD_PLAYER_SUCCESS
}
interface AddPlayerFailure extends PlayerAsync {
  type: typeof ADD_PLAYER_FAILURE
}

export type PlayerActionTypes = 
  | FetchPlayerRequest
  | FetchPlayerSuccess
  | FetchPlayerFailure
  | AddPlayerSuccess
  | AddPlayerFailure