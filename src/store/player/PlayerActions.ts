/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from 'redux';

import { AppActions } from '../models/actions';
import {
  FETCH_PLAYER_REQUEST,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
  ADD_PLAYER_SUCCESS,
  ADD_PLAYER_FAILURE,
  EDIT_PLAYER_SUCCESS,
  EDIT_PLAYER_FAILURE,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILURE
} from './models/actions';
import { Player } from './models/Player';

const requestPlayer = (): AppActions => ({
  type: FETCH_PLAYER_REQUEST,
  loading: true,
  player: undefined,
  error: ''
});

const receivePlayer = (player: Player): AppActions => ({
  type: FETCH_PLAYER_SUCCESS,
  loading: false,
  player,
  error: ''
});

const invalidatePlayer = (error: string): AppActions => ({
  type: FETCH_PLAYER_FAILURE,
  loading: false,
  player: undefined,
  error: error
});

const addPlayerSuccess = (): AppActions => ({
  type: ADD_PLAYER_SUCCESS,
  loading: false,
  player: undefined,
  error: ''
})

const addPlayerFailure = (error: string): AppActions => ({
  type: ADD_PLAYER_FAILURE,
  loading: false,
  player: undefined,
  error: error
})

const editPlayerSuccess = (player: Player): AppActions => ({
  type: EDIT_PLAYER_SUCCESS,
  loading: false,
  player: player,
  error: ''
})

const editPlayerFailure = (error: string): AppActions => ({
  type: EDIT_PLAYER_FAILURE,
  loading: false,
  player: undefined,
  error: error
})

const deletePlayerSuccess = (): AppActions => ({
  type: DELETE_PLAYER_SUCCESS,
  loading: false,
  player: undefined,
  error: ''
})

const deletePlayerFailure = (error: string): AppActions => ({
  type: DELETE_PLAYER_FAILURE,
  loading: false,
  player: undefined,
  error: error
})

export const boundRequestPlayer = (playerId: string) => async (dispatch: Dispatch<AppActions>) => {
  dispatch(requestPlayer());

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/players?id=${playerId}`);
    const json = await res.json();

    return dispatch(receivePlayer(json[0]));
  } catch(e) {
    dispatch(invalidatePlayer(e.message));
  }
}

export const addPlayerAsync = (body: Player) => async (dispatch: Dispatch<AppActions>) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/players`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    res.status === 200 && dispatch(addPlayerSuccess());
  } catch(e) {
    dispatch(addPlayerFailure(e.message));
  }
}

export const editPlayerAsync = (body: Player) => async (dispatch: Dispatch<AppActions>) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/players/${body.id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const player = await res.json();
    player && dispatch(editPlayerSuccess(player));
  } catch(e) {
    dispatch(editPlayerFailure(e.message));
  }
}

export const deletePlayerAsync = (id: string) => async (dispatch: Dispatch<AppActions>) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/players/${id}`, {
      method: 'DELETE',
    });
    res.status === 200 && dispatch(deletePlayerSuccess());
  } catch(e) {
    dispatch(deletePlayerFailure(e.message));
  }
}