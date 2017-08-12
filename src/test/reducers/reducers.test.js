import reducer from '../../reducers';
import { ServiceStatus, MemberActionTypes } from '../../constants';

const INITIAL_STATE = {
  organization: '',
  teamMembers: [],
  teamMemberRequestStatus: ServiceStatus.NOT_STARTED,
  memberDetails: {},
  memberDetailsRequestStatus: ServiceStatus.NOT_STARTED,
};

function runReducer(action, expected, initialState = {}) {
  expect(reducer(initialState, typeof action === 'string' ? { type: action } : action))
    .toEqual(expected);
}

describe('Reducers', () => {
  it('Verifies the initial state', () => {
    runReducer('INITIAL', INITIAL_STATE);
  });

  it('Verifies that GET_MEMBERS_BY_ORG sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBERS_BY_ORG, org: 'test' },
      Object.assign(
        {},
        INITIAL_STATE,
        { organization: 'test', teamMemberRequestStatus: ServiceStatus.LOADING },
      ),
    );
  });

  it('Verifies that GET_MEMBERS_BY_ORG_SUCCESS sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS, members: ['test'] },
      Object.assign(
        {},
        INITIAL_STATE,
        { teamMemberRequestStatus: ServiceStatus.SUCCESS, teamMembers: ['test'] },
      ),
    );
  });

  it('Verifies that GET_MEMBERS_BY_ORG_FAILURE sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBERS_BY_ORG_FAILURE },
      Object.assign({}, INITIAL_STATE, { teamMemberRequestStatus: ServiceStatus.FAILURE }),
    );
  });

  it('Verifies that GET_MEMBER_DETAILS_BY_ID sets the correct state', () => {
    runReducer(
      MemberActionTypes.GET_MEMBER_DETAILS_BY_ID,
      Object.assign(
        {},
        INITIAL_STATE,
        { memberDetailsRequestStatus: ServiceStatus.LOADING },
      ),
    );
  });

  it('Verifies that GET_MEMBER_DETAILS_BY_ID_SUCCESS sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS, memberDetails: { id: 'test' } },
      Object.assign(
        {},
        INITIAL_STATE,
        { memberDetailsRequestStatus: ServiceStatus.SUCCESS, memberDetails: { id: 'test' } },
      ),
    );
  });

  it('Verifies that GET_MEMBER_DETAILS_BY_ID_FAILURE sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_FAILURE },
      Object.assign(
        {},
        INITIAL_STATE,
        { memberDetailsRequestStatus: ServiceStatus.FAILURE },
      ),
    );
  });
});
