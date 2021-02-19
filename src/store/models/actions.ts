import { TeamActionTypes } from '../team/models/actions';
import { PlayerActionTypes } from '../player/models/actions';

export type AppActions = TeamActionTypes | PlayerActionTypes;