import { Team } from './Team';

export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE';
export const FETCH_TEAM_REQUEST = 'FETCH_TEAM_REQUEST';
export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const FETCH_TEAM_FAILURE = 'FETCH_TEAM_FAILURE';

interface TeamAsync {
  loading: boolean,
  teams: Team[],
  team?: Team,
  error: string
}

interface FetchTeamsRequest extends TeamAsync {
  type: typeof FETCH_TEAMS_REQUEST
}
interface FetchTeamsSuccess extends TeamAsync {
  type: typeof FETCH_TEAMS_SUCCESS
}
interface FetchTeamsFailure extends TeamAsync {
  type: typeof FETCH_TEAMS_FAILURE
}
interface FetchTeamRequest extends TeamAsync {
  type: typeof FETCH_TEAM_REQUEST
}
interface FetchTeamSuccess extends TeamAsync {
  type: typeof FETCH_TEAM_SUCCESS
}
interface FetchTeamFailure extends TeamAsync {
  type: typeof FETCH_TEAM_FAILURE
}

export type TeamActionTypes = 
  | FetchTeamsRequest
  | FetchTeamsSuccess
  | FetchTeamsFailure
  | FetchTeamRequest
  | FetchTeamSuccess
  | FetchTeamFailure;