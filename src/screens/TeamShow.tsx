import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { v4 as uuid } from 'uuid';

import { RootState, useTypedSelector } from '../store/rootStore';
import { AppActions } from '../store/models/actions';
import { boundRequestTeam } from '../store/team/TeamActions';
import { addPlayerAsync } from '../store/player/PlayerActions';
import { Link, useHistory, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Modal from '../components/Modal';

interface Values {
  jpName: string,
  enName: string,
  height: number,
  weight: number,
  position: string,
  teamNumber: number,
  nationality: string,
  birthday: string,
  bio: string,
  thumb: string,
  teamId: string
}

const resetValues = () => ({
  jpName: '',
  enName: '',
  height: 0,
  weight: 0,
  position: '',
  teamNumber: 0,
  nationality: '',
  birthday: '',
  bio: '',
  thumb: '',
  teamId: ''
});

interface RouteParams {
  id: string;
}

const TeamShow: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const { team } = useTypedSelector((state) => state.teamReducer);
  const dispatch: ThunkDispatch<RootState, unknown, AppActions> = useDispatch();
  const fetchTeam = () => dispatch(boundRequestTeam(id));
  const addPlayer = (body: unknown) => dispatch(addPlayerAsync(body));
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState<Values>(resetValues);

  useEffect(() => {
    fetchTeam();
  }, []);

  const sortedPlayers = team?.players.sort((a, b) => a.teamNumber !== b.teamNumber ? (a.teamNumber < b.teamNumber ? -1 : 1) : 0);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addPlayer({
      ...values,
      id: uuid(),
      teamId: team?.id || '',
    });
    fetchTeam();
    onModalClose();
    setValues(resetValues);
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
                rounded-full
                icon="user-plus"
                circle
                onClick={handleAddPlayerClick}
              />
            </div>
            <div className="grid grid-rows-1 gap-y-4">
              {sortedPlayers?.map((player) => (
                <div
                  className="w-full bg-gray-darkest text-white hover:bg-purple transition-colors duration-300 shadow-md py-1 px-4 rounded flex justify-between items-center cursor-pointer"
                  key={player.id}
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
              ))}
            </div>
          </main>
        </div>
      )}
      <Modal onClose={onModalClose} isOpen={showModal} title="Add a player">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-2 gap-x-8">
            <div>
              <label htmlFor="jpName">Japanese name</label>
              <input required onChange={(e) => handleInputChange(e)} name="jpName" type="text" value={values?.jpName} />
            </div>
            <div>
              <label htmlFor="enName">English name</label>
              <input onChange={(e) => handleInputChange(e)} name="enName" type="text" value={values?.enName} />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-8 mt-4'>
            <div>
              <label htmlFor="nationality">Nationality</label>
              <input required onChange={(e) => handleInputChange(e)} name="nationality" type="text" value={values?.nationality} />
              <span className="text-sm text-gray">I.E. JP for japanese</span>
            </div>
            <div>
              <label htmlFor="birthday">Birthday</label>
              <input onChange={(e) => handleInputChange(e)} name="birthday" type="text" value={values?.birthday} />
              <span className="text-sm text-gray">I.E. August 23rd</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 mt-4">
            <div>
              <label htmlFor="height">Height</label>
              <input onChange={(e) => handleInputChange(e)} name="height" type="number" value={values?.height} />
              <span className="text-sm text-gray">In centimeters</span>
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <input onChange={(e) => handleInputChange(e)} name="weight" type="number" value={values?.weight} />
              <span className="text-sm text-gray">In kilograms</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 mt-4">
            <div>
              <label htmlFor="position">Position</label>
              <input required onChange={(e) => handleInputChange(e)} name="position" type="text" value={values?.position} />
              <span className="text-sm text-gray">I.E. GK for goal keeper</span>
            </div>
            <div>
              <label htmlFor="teamNumber">Team Number</label>
              <input required onChange={(e) => handleInputChange(e)} name="teamNumber" type="number" value={values?.teamNumber} />
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor="bio">Bio</label>
            <textarea onChange={(e) => handleTextAreaChange(e)} name="bio" cols={30} rows={10} value={values?.bio}></textarea>
          </div>
          <div className='mt-4'>
            <label htmlFor="thumb">Thumb</label>
            <input required onChange={(e) => handleInputChange(e)} name="thumb" type="text" value={values?.thumb} />
          </div>
          <div className="flex justify-end mt-8">
            <div className='mr-4'>
              <Button onClick={onModalClose} bgColor="red" text="Cancel" />
            </div>
            <Button isSubmit bgColor="green" text="Save" />
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default TeamShow;
