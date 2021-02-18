import { Dispatch } from 'redux';

import { AppActions } from '../models/actions';
import { FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE } from './models/actions';
import { Team } from './models/Team';

const requestTeams = (): AppActions => ({
  type: FETCH_TEAMS_REQUEST,
  loading: true,
  teams: [],
  error: ''
});

const receiveTeams = (teams: Team[]): AppActions => ({
  type: FETCH_TEAMS_SUCCESS,
  loading: false,
  teams,
  error: ''
});

const invalidateTeams = (error: string): AppActions => ({
  type: FETCH_TEAMS_FAILURE,
  loading: false,
  teams: [],
  error,
});

export const boundRequestTeams = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch(requestTeams());

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/teams`);
    const json = await res.json();

    return dispatch(receiveTeams(json));
  } catch(e) {
    dispatch(invalidateTeams(e.message))
  }
}