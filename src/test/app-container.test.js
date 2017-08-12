import React from 'react';
import { renderShallow } from './TestUtils';
import AppContainer from '../app-container';
import * as TeamMemberDispatchers from '../dispatchers/team-member-dispatchers';

describe('App Container', () => {
  it('renders the application container and ensures dispatchers are mapped correctly', () => {
    spyOn(TeamMemberDispatchers, 'getMembersByOrg').and.returnValue('getMembersByOrg');
    const dispatch = jasmine.createSpy('dispatch');
    const mockStore = { getState: () => {}, dispatch };
    const actual = renderShallow(React.createElement(AppContainer, { store: mockStore }));

    actual.props.onLoad();

    expect(TeamMemberDispatchers.getMembersByOrg).toHaveBeenCalledWith('Code42');
    expect(dispatch).toHaveBeenCalledWith('getMembersByOrg');
  });
});
