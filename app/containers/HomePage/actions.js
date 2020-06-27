/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_USERNAME } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} currentActivities The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeCurrentActivities(currentActivities) {
  return {
    type: 'Change Current Activities',
    currentActivities,
  };
}

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadActivities() {
  return {
    type: 'Load Activities',
  };
}

export function changeOrigin(origin) {
  return {
    type: 'Change Origin',
    origin,
  };
}

export function changeDestination(destination) {
  return {
    type: 'Change Destination',
    destination,
  };
}

export function changeDepartDate(departDate) {
  return {
    type: 'Change Depart Date',
    departDate,
  };
}

export function changePassenger(passenger) {
  return {
    type: 'Change Passenger',
    passenger,
  };
}

export function onSearchTaxiBooking() {
  return {
    type: 'Search Taxi Booking',
  };
}
