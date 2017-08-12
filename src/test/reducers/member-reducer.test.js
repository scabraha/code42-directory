import reducer from '../../reducers/member-reducer';
import { ServiceStatus, MemberActionTypes } from '../../constants';

const INITIAL_STATE = {
  selectedId: '',
  details: {},
  repos: [],
  detailsRequestStatus: ServiceStatus.NOT_STARTED,
  repoRequestStatus: ServiceStatus.NOT_STARTED,
};

function runReducer(action, expected, initialState = {}) {
  expect(reducer(initialState, typeof action === 'string' ? { type: action } : action))
    .toEqual(expected);
}

describe('Reducers', () => {
  it('Verifies the initial state', () => {
    runReducer('INITIAL', INITIAL_STATE);
  });

  it('Verifies that GET_MEMBER_DETAILS_BY_ID sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID, userId: 'test' },
      Object.assign(
        {},
        INITIAL_STATE,
        { selectedId: 'test', detailsRequestStatus: ServiceStatus.LOADING },
      ),
    );
  });

  it('Verifies that GET_MEMBER_DETAILS_BY_ID_SUCCESS sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS, details: { id: 'test' } },
      Object.assign(
        {},
        INITIAL_STATE,
        { detailsRequestStatus: ServiceStatus.SUCCESS, details: { id: 'test' } },
      ),
    );
  });

  it('Verifies that GET_MEMBER_DETAILS_BY_ID_FAILURE sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_FAILURE },
      Object.assign(
        {},
        INITIAL_STATE,
        { detailsRequestStatus: ServiceStatus.FAILURE },
      ),
    );
  });

  it('Verifies that GET_REPOS_BY_ID sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_REPOS_BY_ID, userId: 'test' },
      Object.assign(
        {},
        INITIAL_STATE,
        { repoRequestStatus: ServiceStatus.LOADING },
      ),
    );
  });

  it('Verifies that GET_REPOS_BY_ID_SUCCESS sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_REPOS_BY_ID_SUCCESS, repos: ['test'] },
      Object.assign(
        {},
        INITIAL_STATE,
        { repoRequestStatus: ServiceStatus.SUCCESS, repos: ['test'] },
      ),
    );
  });

  it('Verifies that GET_REPOS_BY_ID_FAILURE sets the correct state', () => {
    runReducer(
      { type: MemberActionTypes.GET_REPOS_BY_ID_FAILURE },
      Object.assign(
        {},
        INITIAL_STATE,
        { repoRequestStatus: ServiceStatus.FAILURE },
      ),
    );
  });
});
