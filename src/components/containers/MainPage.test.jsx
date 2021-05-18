import React from 'react';
import { render, screen } from '@testing-library/react';
import  MainPage  from './MainPage'

describe('Testing MainPage Container', () => { 
    // beforeAll(() => server.listen());
    // afterAll(() => server.close());

    it('should render a list of avatar characters and redired to a detail page', async () => { 
        render(<MainPage/>);

        const ul = await screen.findByRole('list', {name: 'avatars'})
        expect(ul).toMatchSnapshot();
    });
});