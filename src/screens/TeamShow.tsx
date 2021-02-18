import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState, useTypedSelector } from '../store/rootStore';
import { AppActions } from '../store/models/actions';
import { boundRequestTeam } from '../store/team/TeamActions';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';

interface RouteParams {
  id: string
}

const TeamShow: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { team } = useTypedSelector(state => state.teamReducer)
  const dispatch: ThunkDispatch<RootState, unknown, AppActions> = useDispatch();
  const fetchTeam = () => dispatch(boundRequestTeam(id));

  useEffect(() => { fetchTeam() }, [])

  const sortedPlayers = team?.players.sort((a, b) => a.teamNumber !== b.teamNumber ? a.teamNumber < b.teamNumber ? -1 : 1 : 0);

  const isCaptain = (name: string) => name === team?.captain;

  const handlePlayerClick = () => {
    console.log('click');
  }

  return (
    <section className="container p-8">
      <div className='pb-4'>
        <Link className="text-blue hover:text-blue-dark" to="/">
          <i className='mr-2 fas fa-arrow-left'></i>
          <span>Back to teams</span>
        </Link>
      </div>
      {team && (
        <div className='md:grid md:grid-cols-3'>
          <aside className="shadow-md rounded overflow-hidden">
            <div className='bg-gray-darkest text-white flex justify-between items-center py-2 px-4'>
              <h2 className="text-xl font-bold font-serif text-purple">{team.name}</h2>
              <img className="w-10 h-10 object-scale-down" src={team.logo} alt={team.name} />
            </div>
            <div className='p-4'>
              <div className="flex">
                <div>
                  <div className="pb-2">
                    <h3 className="font-bold">Coach:</h3>
                    <span>{team.coach}</span>
                  </div>
                  <div className="pb-2">
                    <h3 className="font-bold">Captain:</h3>
                    <span>{team.captain}</span>
                  </div>
                </div>
                <img className="flex-shrink-0" src={team.uniform} alt={team.name} />
              </div>
              <div className='pb-2'>
                <h3 className="font-bold">Description:</h3>
                <p>{team.description}</p>
              </div>
            </div>
          </aside>
          <main className="md:col-span-2 py-4 md:px-8">
            <div className="flex justify-between items-center pb-8">
              <div>
                <h2 className="font-bold text-xl">Players list</h2>
                {sortedPlayers && sortedPlayers.length < 11 ? (
                  <div className='text-red'>
                    <i className='fas fa-exclamation-triangle mr-2'></i>
                    <span>Missing {11 - sortedPlayers.length} players</span>
                  </div>
                ) : (
                  <div className='text-green'>
                    <i className='fas fa-check mr-2'></i>
                    <span>Team full</span>
                  </div>
                )}
              </div>
              <Button bgColor="green" rounded-full icon="user-plus" circle onClick={handlePlayerClick} />
            </div>
            <div className='grid grid-rows-1 gap-y-4'>
              {sortedPlayers?.map(player => (
              <div className="bg-gray-darkest text-white hover:bg-purple transition-colors duration-300 shadow-md py-1 px-4 rounded flex justify-between cursor-pointer" key={player.id}>
                  <span className="font-bold">{player.teamNumber}</span>
                  <span className="font-serif">
                    {player.jp_name}
                    {isCaptain(player.jp_name) && <i className='ml-2 fas fa-crown text-yellow-dark'></i>}
                  </span>
                  <span>{player.position}</span>
                </div>
              ))}
            </div>
          </main>
        </div>
      )}
    </section>
  )
}

export default TeamShow;
