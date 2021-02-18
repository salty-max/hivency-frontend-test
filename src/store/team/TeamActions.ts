/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Dispatch } from 'redux';

import { AppActions } from '../models/actions';
import { 
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE 
} from './models/actions';
import { Team } from './models/Team';

const requestTeams = (): AppActions => ({
  type: FETCH_TEAMS_REQUEST,
  loading: true,
  teams: [],
  team: undefined,
  error: ''
});

const receiveTeams = (teams: Team[]): AppActions => ({
  type: FETCH_TEAMS_SUCCESS,
  loading: false,
  teams,
  team: undefined,
  error: ''
});

const invalidateTeams = (error: string): AppActions => ({
  type: FETCH_TEAMS_FAILURE,
  loading: false,
  teams: [],
  team: undefined,
  error,
});

const requestTeam = (): AppActions => ({
  type: FETCH_TEAM_REQUEST,
  loading: true,
  teams: [],
  team: undefined,
  error: ''
});

const receiveTeam = (team: Team): AppActions => ({
  type: FETCH_TEAM_SUCCESS,
  loading: false,
  teams: [],
  team: team,
  error: ''
});

const invalidateTeam = (error: string): AppActions => ({
  type: FETCH_TEAM_FAILURE,
  loading: false,
  teams: [],
  team: undefined,
  error,
});

export const boundRequestTeams = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch(requestTeams());

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/teams?_embed=players`);
    const json = await res.json();

    return dispatch(receiveTeams(json));
  } catch(e) {
    dispatch(invalidateTeams(e.message))
  }
}

export const boundRequestTeam = (teamId: string) => async (dispatch: Dispatch<AppActions>) => {
  dispatch(requestTeam());

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/teams?_embed=players&id=${teamId}`);
    const json = await res.json();

    return dispatch(receiveTeam(json[0]));
  } catch(e) {
    dispatch(invalidateTeam(e.message))
  }
}