/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import Geocode from 'react-geocode';
import { formatDate } from '../../helper/Converter';
import {
  makeSelectCurrentActivities,
  makeSelectOrigin,
  makeSelectDestination,
  makeSelectDepartDate,
  makeSelectPassenger,
} from './selectors';

Geocode.setApiKey('AIzaSyCABQk0mlIwOrVfDaq4q6-WIT1RaTsgpNQ');

/**
 * Github repos request/response handler
 */
export function* getActivities() {
  // Select username from store
  const username = yield select(makeSelectCurrentActivities());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    console.log(repos);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getTaxiBookingPrice() {
  // Select username from store
  const origin = yield select(makeSelectOrigin());
  let originComponent = {};
  const destination = yield select(makeSelectDestination());
  let destinationComponent = {};
  const departDate = yield select(makeSelectDepartDate());
  const passenger = yield select(makeSelectPassenger());
  const requestURL = `https://taxiairport.vn/api.php/passenger/get_price_list?product_chunk_type=TRANSFER_SERVICE`;
  try {
    yield Geocode.fromAddress(origin.description).then(
      response => {
        const res = response.results[0];
        originComponent = res;
      },
      error => {
        throw new Error(error);
      },
    );
    yield Geocode.fromAddress(destination.description).then(
      response => {
        const res = response.results[0];
        destinationComponent = res;
      },
      error => {
        throw new Error(error);
      },
    );
    const formData = new FormData();
    formData.append('depart_time', formatDate(departDate));
    formData.append('dimension_id', '1');
    formData.append('pick_address', origin.description);
    formData.append('pick_address_component', JSON.stringify(originComponent));
    formData.append('drop_address', destination.description);
    formData.append(
      'drop_address_component',
      JSON.stringify(destinationComponent),
    );
    formData.append('vehicle_id', '0');
    formData.append('chair', passenger);

    const requestOptions = {
      method: 'POST',
      body: formData,
    };
    const res = yield call(request, requestURL, requestOptions);
    console.log(res);
  } catch (error) {
    alert('Có lỗi xảy ra');
    console.log(error);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadActivities() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest('Search Taxi Booking', getTaxiBookingPrice);
}
