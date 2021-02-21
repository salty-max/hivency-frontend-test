import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamList from '../screens/TeamList';

test('renders team list', () => {
    render(<TeamList />);
    screen.debug();
});
