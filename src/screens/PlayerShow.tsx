import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState, useTypedSelector } from '../store/rootStore';
import { AppActions } from '../store/models/actions';
import { boundRequestPlayer } from '../store/player/PlayerActions';
import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string
}

const PlayerShow: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { player } = useTypedSelector(state => state.playerReducer);
  const dispatch: ThunkDispatch<RootState, unknown, AppActions> = useDispatch();
  const fetchPlayer = () => dispatch(boundRequestPlayer(id));

  useEffect(() => { fetchPlayer(); }, []);

  return (
    <section>
      {player && (
        <p>{player.jp_name}</p>
      )}  
    </section>
  )
}

export default PlayerShow
