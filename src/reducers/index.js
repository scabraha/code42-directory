import { combineReducers } from 'redux';
import team from './team-reducer';
import member from './member-reducer';

export default combineReducers({ team, member });
