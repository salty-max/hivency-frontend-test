import { 
  TeamActionTypes,
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE 
} from './models/actions';
import { Team } from './models/Team';

interface TeamState {
  loading: boolean,
  teams: Team[],
  team?: Team,
  error: string
}

const initialState: TeamState = {
  loading: false,
  teams: [],
  team: undefined,
  error: ''
}

export const teamReducer = (state: TeamState = initialState, action: TeamActionTypes): TeamState => {
  switch(action.type) {
    case FETCH_TEAMS_REQUEST:
      return { 
        loading: true,
        teams: [],
        team: state.team,
        error: ''
      }
    case FETCH_TEAMS_SUCCESS:
      return { 
        loading: false,
        teams: action.teams,
        team: state.team,
        error: ''
      }
    case FETCH_TEAMS_FAILURE:
      return { 
        loading: false,
        teams: [],
        team: state.team,
        error: action.error
      }
    case FETCH_TEAM_REQUEST:
      return { 
        loading: true,
        teams: state.teams,
        team: state.team,
        error: ''
      }
    case FETCH_TEAM_SUCCESS:
      return { 
        loading: false,
        teams: state.teams,
        team: action.team,
        error: ''
      }
    case FETCH_TEAM_FAILURE:
      return { 
        loading: false,
        teams: state.teams,
        team: state.team,
        error: action.error
      }
    default:
      return state;
  }
}
