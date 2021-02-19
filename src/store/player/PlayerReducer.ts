import { 
  PlayerActionTypes,
  FETCH_PLAYER_REQUEST,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE,
  ADD_PLAYER_SUCCESS,
  ADD_PLAYER_FAILURE,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILURE,
} from './models/actions';
import { Player } from './models/Player';

interface PlayerState {
  loading: boolean,
  player?: Player,
  error: string
}

const initialState: PlayerState = {
  loading: false,
  player: undefined,
  error: ''
}

export const playerReducer = (state: PlayerState = initialState, action: PlayerActionTypes): PlayerState => {
  switch(action.type) {
    case FETCH_PLAYER_REQUEST:
      return { 
        loading: true,
        player: state.player,
        error: ''
      }
    case FETCH_PLAYER_SUCCESS:
      return { 
        loading: false,
        player: action.player,
        error: ''
      }
    case FETCH_PLAYER_FAILURE:
      return { 
        loading: false,
        player: state.player,
        error: action.error
      }
    case ADD_PLAYER_SUCCESS:
      return { 
        loading: false,
        player: state.player,
        error: ''
      }
    case ADD_PLAYER_FAILURE:
      return { 
        loading: false,
        player: state.player,
        error: action.error
      }
    case DELETE_PLAYER_SUCCESS:
      return { 
        loading: false,
        player: undefined,
        error: ''
      }
    case DELETE_PLAYER_FAILURE:
      return { 
        loading: false,
        player: state.player,
        error: action.error
      }
    default:
      return state;
  }
}