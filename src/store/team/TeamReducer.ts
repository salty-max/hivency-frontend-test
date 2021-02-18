import { TeamActionTypes, FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE } from './models/actions';
import { Team } from './models/Team';

interface TeamState {
  loading: boolean,
  teams: Team[],
  error: string
}

const initialState: TeamState = {
  loading: false,
  teams: [],
  error: ''
}

export const teamReducer = (state: TeamState = initialState, action: TeamActionTypes): TeamState => {
  switch(action.type) {
    case FETCH_TEAMS_REQUEST:
      return { 
        loading: true,
        teams: [],
        error: ''
      }
    case FETCH_TEAMS_SUCCESS:
      return { 
        loading: true,
        teams: action.teams,
        error: ''
      }
    case FETCH_TEAMS_FAILURE:
      return { 
        loading: false,
        teams: [],
        error: action.error
      }
    default:
      return state;
  }
}
