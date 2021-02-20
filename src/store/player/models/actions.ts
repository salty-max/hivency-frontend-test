import { Player } from './Player';

export const FETCH_PLAYER_REQUEST = 'FETCH_PLAYER_REQUEST';
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_FAILURE = 'FETCH_PLAYER_FAILURE';
export const ADD_PLAYER_SUCCESS = 'ADD_PLAYER_SUCCESS';
export const ADD_PLAYER_FAILURE = 'ADD_PLAYER_FAILURE';
export const DELETE_PLAYER_SUCCESS = 'DELETE_PLAYER_SUCCESS';
export const DELETE_PLAYER_FAILURE = 'DELETE_PLAYER_FAILURE';
export const EDIT_PLAYER_SUCCESS = 'EDIT_PLAYER_SUCCESS';
export const EDIT_PLAYER_FAILURE = 'EDIT_PLAYER_FAILURE';

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
interface EditPlayerSuccess extends PlayerAsync {
  type: typeof EDIT_PLAYER_SUCCESS
}
interface EditPlayerFailure extends PlayerAsync {
  type: typeof EDIT_PLAYER_FAILURE
}
interface DeletePlayerSuccess extends PlayerAsync {
  type: typeof DELETE_PLAYER_SUCCESS
}
interface DeletePlayerFailure extends PlayerAsync {
  type: typeof DELETE_PLAYER_FAILURE
}

export type PlayerActionTypes = 
  | FetchPlayerRequest
  | FetchPlayerSuccess
  | FetchPlayerFailure
  | AddPlayerSuccess
  | AddPlayerFailure
  | EditPlayerSuccess
  | EditPlayerFailure
  | DeletePlayerSuccess
  | DeletePlayerFailure