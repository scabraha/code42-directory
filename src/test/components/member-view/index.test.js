import React from 'react';
import { renderShallow } from '../../TestUtils';
import MemberContainer from '../../../components/member-view';

describe('Member Container', () => {
  it('renders the container and ensures props are mapped correctly', () => {
    const mockStore = { getState: () => ({
      team: {
        organization: 'organization',
        memberRequestStatus: 'memberRequestStatus',
      },
    }) };
    const actual = renderShallow(React.createElement(MemberContainer, { store: mockStore }));

    expect(actual.props.organization).toBe('organization');
    expect(actual.props.teamMemberRequestStatus).toBe('memberRequestStatus');
  });
});
