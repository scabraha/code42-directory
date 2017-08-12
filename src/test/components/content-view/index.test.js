import React from 'react';
import { renderShallow } from '../../TestUtils';
import ContentContainer from '../../../components/content-view';

describe('Content Container', () => {
  it('renders the container and ensures props are mapped correctly', () => {
    const mockStore = { getState: () => ({
      member: {
        selectedId: 'selectedId',
        details: 'details',
        detailsRequestStatus: 'detailsRequestStatus',
      },
    }) };
    const actual = renderShallow(React.createElement(ContentContainer, { store: mockStore }));

    expect(actual.props.selectedMemberId).toBe('selectedId');
    expect(actual.props.memberDetails).toBe('details');
    expect(actual.props.memberDetailsRequestStatus).toBe('detailsRequestStatus');
  });
});
