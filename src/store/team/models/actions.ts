import { Team } from './Team';

export const FETCH_TEAMS_REQUEST = 'FETCH_TEAMS_REQUEST';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_FAILURE = 'FETCH_TEAMS_FAILURE';

interface TeamAsync {
  loading: boolean,
  teams: Team[],
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

export type TeamActionTypes = FetchTeamsRequest | FetchTeamsSuccess | FetchTeamsFailure;