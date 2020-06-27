/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectCurrentActivities = () =>
  createSelector(
    selectHome,
    homeState => homeState.currentActivities,
  );
const makeSelectOrigin = () =>
  createSelector(
    selectHome,
    homeState => homeState.origin,
  );
const makeSelectDestination = () =>
  createSelector(
    selectHome,
    homeState => homeState.destination,
  );
const makeSelectDepartDate = () =>
  createSelector(
    selectHome,
    homeState => homeState.departDate,
  );
const makeSelectPassenger = () =>
  createSelector(
    selectHome,
    homeState => homeState.passenger,
  );

export {
  selectHome,
  makeSelectUsername,
  makeSelectCurrentActivities,
  makeSelectOrigin,
  makeSelectDestination,
  makeSelectDepartDate,
  makeSelectPassenger,
};
