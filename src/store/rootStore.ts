import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { teamReducer } from './team/TeamReducer';
import { playerReducer } from './player/PlayerReducer';
import { AppActions } from './models/actions';

//TODO: Remove in production
const logger = createLogger();

export const rootReducer = combineReducers({
  teamReducer,
  playerReducer
});

export type RootState = ReturnType<typeof rootReducer>;

// Export already typed selector for easier use in components.
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore<RootState, AppActions, unknown, unknown>(
  rootReducer,
  applyMiddleware(
    thunk as ThunkMiddleware<RootState, AppActions>,
    logger //TODO: Remove in production
  )
)