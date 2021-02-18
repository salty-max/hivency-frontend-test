import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { teamReducer } from './team/TeamReducer';
import { AppActions } from './models/actions';

const logger = createLogger();

export const rootReducer = combineReducers({ teamReducer });

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore<RootState, AppActions, unknown, unknown>(
  rootReducer,
  applyMiddleware(
    thunk as ThunkMiddleware<RootState, AppActions>,
    logger
  )
)