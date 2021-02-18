import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState, useTypedSelector } from '../store/rootStore';
import { AppActions } from '../store/models/actions';
import { boundRequestTeams } from '../store/team/TeamActions';

const MainPage: React.FC = () => {
  const { teams } = useTypedSelector(state => state.teamReducer)
  const dispatch: ThunkDispatch<RootState, unknown, AppActions> = useDispatch();
  const fetchTeams = () => dispatch(boundRequestTeams());

  useEffect(() => { fetchTeams() }, []);

  return (
    <div className='container'>
      {teams && teams.length > 0 && teams.map(team => (
        <div key={team.id} className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img className="h-20 w-20" src={team.logo} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-blue">{team.name}</div>
            <p>{team.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainPage
