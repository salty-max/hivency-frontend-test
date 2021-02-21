import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { v4 as uuid } from 'uuid';

import { RootState, useTypedSelector } from '../store/rootStore';
import { AppActions } from '../store/models/actions';
import { addPlayerAsync, editPlayerAsync } from '../store/player/PlayerActions';
import Button from './Button';
import Modal from './Modal';
import { Player } from '../store/player/models/Player';

interface Values {
  jpName: string;
  enName: string;
  height: number;
  weight: number;
  position: string;
  teamNumber: number;
  nationality: string;
  birthday: string;
  bio: string;
  thumb: string;
  teamId: string;
}

type PlayerFormModalProps = {
  player?: Player;
  showModal: boolean;
  onModalClose: () => void,
  afterSubmit?: () => void // Method to be used during onSubmit after data saving.
};

/**
 * TODO: More validation !
 * TODO: Input component
 */
const PlayerFormModal: React.FC<PlayerFormModalProps> = ({
  showModal,
  onModalClose,
  player,
  afterSubmit
}: PlayerFormModalProps) => {

  /**
   * If player is passed in props, set it into state otherwise set default values
   * TODO: Rework to move it after initializations
   */
  const initialValues = useMemo(() => (
    player
      ? player
      : {
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
    teamId: '',
  }), [player]);

  const dispatch: ThunkDispatch<RootState, unknown, AppActions> = useDispatch();
  const addPlayer = (body: Player) => dispatch(addPlayerAsync(body));
  const editPlayer = (body: Player) => dispatch(editPlayerAsync(body));
  const { team } = useTypedSelector((state) => state.teamReducer);
  const [values, setValues] = useState<Values>(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    player
      ? editPlayer({
        ...values,
        id: player.id,
        teamId: team?.id || '',
      })
      : addPlayer({
        ...values,
        id: uuid(),
        teamId: team?.id || '',
      });

    afterSubmit && afterSubmit();
    onModalClose();
    //Reset form values
    setValues(initialValues);
  };
  return (
    <Modal onClose={onModalClose} isOpen={showModal} title="Add a player">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid grid-cols-2 gap-x-8">
          <div>
            <label htmlFor="jpName">Japanese name</label>
            <input
              required
              onChange={(e) => handleInputChange(e)}
              name="jpName"
              type="text"
              value={values?.jpName}
            />
          </div>
          <div>
            <label htmlFor="enName">English name</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name="enName"
              type="text"
              value={values?.enName}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 mt-4">
          <div>
            <label htmlFor="nationality">Nationality</label>
            <input
              required
              onChange={(e) => handleInputChange(e)}
              name="nationality"
              type="text"
              value={values?.nationality}
            />
            <span className="text-sm text-gray">I.E. JP for japanese</span>
          </div>
          <div>
            <label htmlFor="birthday">Birthday</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name="birthday"
              type="text"
              value={values?.birthday}
            />
            <span className="text-sm text-gray">I.E. August 23rd</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 mt-4">
          <div>
            <label htmlFor="height">Height</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name="height"
              type="number"
              value={values?.height}
            />
            <span className="text-sm text-gray">In centimeters</span>
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <input
              onChange={(e) => handleInputChange(e)}
              name="weight"
              type="number"
              value={values?.weight}
            />
            <span className="text-sm text-gray">In kilograms</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 mt-4">
          <div>
            <label htmlFor="position">Position</label>
            <input
              required
              onChange={(e) => handleInputChange(e)}
              name="position"
              type="text"
              value={values?.position}
            />
            <span className="text-sm text-gray">I.E. GK for goal keeper</span>
          </div>
          <div>
            <label htmlFor="teamNumber">Team Number</label>
            <input
              required
              onChange={(e) => handleInputChange(e)}
              name="teamNumber"
              type="number"
              value={values?.teamNumber}
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="bio">Bio</label>
          <textarea
            onChange={(e) => handleTextAreaChange(e)}
            name="bio"
            cols={30}
            rows={10}
            value={values?.bio}
          ></textarea>
        </div>
        <div className="mt-4">
          <label htmlFor="thumb">Thumb</label>
          <input
            required
            onChange={(e) => handleInputChange(e)}
            name="thumb"
            type="text"
            value={values?.thumb}
          />
        </div>
        <div className="flex justify-end mt-8">
          <div className="mr-4">
            <Button onClick={onModalClose} bgColor="red" text="Cancel" />
          </div>
          <Button isSubmit bgColor="green" text="Save" />
        </div>
      </form>
    </Modal>
  );
};

export default PlayerFormModal;
