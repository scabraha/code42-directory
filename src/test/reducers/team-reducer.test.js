import reducer from '../../reducers/team-reducer';
import { ServiceStatus, MemberActionTypes } from '../../constants';

const INITIAL_STATE = {
  organization: '',
  members: [],
  memberRequestStatus: ServiceStatus.NOT_STARTED,
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
        { organization: 'test', memberRequestStatus: ServiceStatus.LOADING },
      ),
    );
  });

  it('Verifies that GET_MEMBERS_BY_ORG_SUCCESS sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS, members: ['test'] },
      Object.assign(
        {},
        INITIAL_STATE,
        { memberRequestStatus: ServiceStatus.SUCCESS, members: ['test'] },
      ),
    );
  });

  it('Verifies that GET_MEMBERS_BY_ORG_FAILURE sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBERS_BY_ORG_FAILURE },
      Object.assign({}, INITIAL_STATE, { memberRequestStatus: ServiceStatus.FAILURE }),
    );
  });
});
