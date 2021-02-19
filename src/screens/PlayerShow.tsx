import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState, useTypedSelector } from '../store/rootStore';
import { AppActions } from '../store/models/actions';
import { boundRequestPlayer } from '../store/player/PlayerActions';
import { Link, useParams } from 'react-router-dom';

interface RouteParams {
  id: string;
}

const PlayerShow: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { player } = useTypedSelector((state) => state.playerReducer);
  const dispatch: ThunkDispatch<RootState, unknown, AppActions> = useDispatch();
  const fetchPlayer = () => dispatch(boundRequestPlayer(id));

  useEffect(() => {
    fetchPlayer();
  }, []);

  return (
    <section className="p-8">
      {player && (
        <>
          <div className="pb-4 lg:w-2/3 lg:mx-auto">
            <Link
              className="text-blue hover:text-blue-dark"
              to={`/teams/${player.teamId}`}
            >
              <i className="mr-2 fas fa-arrow-left"></i>
              <span>Back to team</span>
            </Link>
          </div>
          <div className="lg:mx-auto lg:w-2/3 md:flex md:bg-gray-darkest md:rounded-lg md:overflow-hidden md:h-70">
            <img className="w-full rounded-lg md:rounded-none" src={player.thumb} alt={player.jp_name} />
            <div className="bg-gray-darkest md:bg-none mt-4 p-4 md:mt-0 rounded md:rounded-none text-white w-full md:flex md:flex-col md:justify-evenly">
              <div className="pb-4 md:pb-8">
                <h1 className="text-xl font-serif">
                  <span className="text-purple mr-2">{player.jp_name}</span>
                  <span>({player.en_name})</span>
                </h1>
                <div className="flex items-center">
                  <img
                    className="flex-shrink-0 w-8 h-8 mr-2"
                    src={player.team?.logo}
                    alt=""
                  />
                  <p>{player.team?.name}</p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-dark grid grid-flow-row px-4 py-2 rounded-lg text-center">
                    <i className="text-purple text-4xl fas fa-flag"></i>{' '}
                    <span className="text-lg">{player.nationality}</span>
                  </div>
                  <div className="bg-blue-dark grid grid-flow-row px-4 py-2 rounded-lg text-center">
                    <i className="text-blue text-4xl fas fa-birthday-cake"></i>{' '}
                    <span className="text-lg">{player.birthday}</span>
                  </div>
                  <div className="bg-green-dark grid grid-flow-row px-4 py-2 rounded-lg text-center">
                    <i className="text-green text-4xl fas fa-ruler-horizontal"></i>{' '}
                    <span className="text-lg">{player.height} cm</span>
                  </div>
                  <div className="bg-mint-dark grid grid-flow-row px-4 py-2 rounded-lg text-center">
                    <i className="text-mint text-4xl fas fa-weight"></i>{' '}
                    <span className="text-lg">{player.weight} kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 lg:w-2/3 lg:mx-auto">
            <h3 className="font-bold text-xl pb-2">Bio</h3>
            <p>{player.bio}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default PlayerShow;
