import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState, useTypedSelector } from '../store/rootStore';
import { AppActions } from '../store/models/actions';
import { boundRequestTeam } from '../store/team/TeamActions';
import { deletePlayerAsync } from '../store/player/PlayerActions';
import { Link, useHistory, useParams } from 'react-router-dom';
import Button from '../components/Button';
import PlayerFormModal from '../components/PlayerFormModal';

interface RouteParams {
  id: string;
}

const TeamShow: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const { team } = useTypedSelector((state) => state.teamReducer);
  const dispatch: ThunkDispatch<RootState, unknown, AppActions> = useDispatch();
  const fetchTeam = () => dispatch(boundRequestTeam(id));
  const deletePlayer = (id: string) => dispatch(deletePlayerAsync(id));
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    fetchTeam();
  }, []);

  // Return players array sorted by team number
  const sortedPlayers = team?.players.sort((a, b) => a.teamNumber !== b.teamNumber ? (a.teamNumber < b.teamNumber ? -1 : 1) : 0);

  // Check if specific player is the team captain => Visual purposes only atm.
  const isCaptain = (name: string): boolean => name === team?.captain;

  const handlePlayerClick = (playerId: string): void => {
    history.push(`/players/${playerId}`);
  };

  const handleAddPlayerClick = (): void => {
    setShowModal(true);
  };

  const onModalClose = (): void => {
    setShowModal(false);
  };
  

  const handleDelete = (id: string): void => {
    deletePlayer(id);
    fetchTeam();
  }

  return (
    <section className="w-full xl:w-2/3 xl:mx-auto p-8">
      <div className="pb-4">
        <Link className="text-blue hover:text-blue-dark" to="/">
          <i className="mr-2 fas fa-arrow-left"></i>
          <span>Back to teams</span>
        </Link>
      </div>
      {team && (
        <div className="md:grid md:grid-cols-3">
          <aside className="shadow-md rounded overflow-hidden">
            <div className="bg-gray-darkest text-white flex justify-between items-center py-2 px-4">
              <h2 className="text-xl font-bold font-serif text-purple">
                {team.name}
              </h2>
              <img
                className="w-10 h-10 object-scale-down"
                src={team.logo}
                alt={team.name}
              />
            </div>
            <div className="p-4">
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
                <img
                  className="flex-shrink-0"
                  src={team.uniform}
                  alt={team.name}
                />
              </div>
              <div className="pb-2">
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
                  <div className="text-red">
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    <span>Missing {11 - sortedPlayers.length} players</span>
                  </div>
                ) : (
                  <div className="text-green">
                    <i className="fas fa-check mr-2"></i>
                    <span>Team full</span>
                  </div>
                )}
              </div>
              <Button
                bgColor="green"
                icon="user-plus"
                text="Add player"
                onClick={handleAddPlayerClick}
              />
            </div>
            <div className="grid grid-rows-1 gap-y-4">
              {sortedPlayers?.map((player) => (
                <div key={player.id} className='flex'>
                  <div
                    className="w-full bg-gray-darkest text-white hover:bg-purple transition-colors duration-300 shadow-md py-1 px-4 rounded flex justify-between items-center cursor-pointer"
                    onClick={() => handlePlayerClick(player.id)}
                  >
                    <span className="font-bold w-8">{player.teamNumber}</span>
                    <div className="flex-1 flex justify-center items-center">
                      {player.thumb ? (
                        <img
                          className="w-8 h-8 rounded-full mr-4"
                          src={player.thumb}
                          alt={player.jpName}
                        />
                      ) : (
                        <i className="fas fa-user"></i>
                      )}
                      <span className="font-serif w-full">
                        {player.jpName}
                        {isCaptain(player.jpName) && (
                          <i className="ml-2 fas fa-crown text-yellow-dark"></i>
                        )}
                      </span>
                    </div>
                    <span className="w-8 text-right">{player.position}</span>
                  </div>
                  <div className='ml-4 grid grid-flow-col gap-x-2'>
                    <Button
                      bgColor="red"
                      onClick={() => handleDelete(player.id)}
                      icon="trash-alt"
                      circle
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Pass fetchTeam() to trigger re-render on submit */}
            <PlayerFormModal afterSubmit={fetchTeam} showModal={showModal} onModalClose={onModalClose} />
          </main>
        </div>
      )}
      
    </section>
  );
};

export default TeamShow;
