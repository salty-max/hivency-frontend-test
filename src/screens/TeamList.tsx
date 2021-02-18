import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState, useTypedSelector } from '../store/rootStore';
import { AppActions } from '../store/models/actions';
import { boundRequestTeams } from '../store/team/TeamActions';
import { Team } from '../store/team/models/Team';
import Button from '../components/Button';
import Logo from '../assets/images/tsubasa-logo.png';

const MainPage: React.FC = () => {
  const { teams } = useTypedSelector(state => state.teamReducer)
  const dispatch: ThunkDispatch<RootState, unknown, AppActions> = useDispatch();
  const fetchTeams = () => dispatch(boundRequestTeams());

  useEffect(() => { fetchTeams() }, []);

  const isTeamFull = (team: Team): boolean => team.players.length >= 11;

  return (
    <main className='container mx-auto px-4'>
      <div className="mx-auto">
        <img className="mx-auto" src={Logo} />
        <h1 className="pt-4 text-4xl text-center text-primary uppercase">Teams manager</h1>
      </div>
      <section className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {teams && teams.length > 0 && teams.map(team => (
          <article key={team.id} className="p-4 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-20 w-20" src={team.logo} alt={team.name} />
            </div>
            <div>
              <div>
                <p className="font-serif text-xl font-medium text-gray-darkest">{team.name}</p>
                {/* Checking if team is full */}
                {isTeamFull(team) ? (
                  <p className="text-sm text-green">
                    <i className='mr-1 fas fa-check'></i>
                    <span>Team full</span>
                  </p>
                  ) : (
                  <p className="text-sm text-red">
                    <i className='mr-1 fas fa-exclamation-triangle'></i>
                    <span>Missing {11 - team.players.length} players</span>
                  </p>
                )}
              </div>
              <div className="mt-4">
                <Button bgColor="blue" textColor="white" text="View more" icon="eye"/>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default MainPage
