import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import './Form.css';
import { changeCurrentActivities, loadActivities } from './actions';
import { makeSelectCurrentActivities } from './selectors';
import saga from './saga';
import reducer from './reducer';

const key = 'home';

function ActivitiesList() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <div>
      <ActivityItem name="Ha Noi (Vietnam)" />
      <ActivityItem name="Ha Noi (Vietnam)" />
      <ActivityItem name="Ha Noi (Vietnam)" />
    </div>
  );
}
function ActivityItem(props) {
  return (
    <Wrapper>
      <Activity>{props.name}</Activity>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 0px 55.5px;
  height: 60px;
  display: flex;
  align-items: center;
  border: solid 1px #b0a9a9;
`;
const Activity = styled.a`
  color: #565656 !important;
  font-family: 'Open Sans';
  font-size: 17px;
  font-weight: 500;
`;

ActivityItem.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  currentActivities: makeSelectCurrentActivities(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeActivities: evt =>
      dispatch(changeCurrentActivities(evt.target.value)),
    onSubmitActivities: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadActivities());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivitiesList);
