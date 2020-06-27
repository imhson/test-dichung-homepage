import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Input from './Input';
import Icon from './Icon';
import Button from './Button';
import LocationIcon from './location.png';
import ActivitesList from './ActivitiesList';
import TaxiBookingForm from './TaxiBookingForm';
import './Form.css';
import { changeCurrentActivities, loadActivities } from './actions';
import { makeSelectCurrentActivities } from './selectors';
import saga from './saga';
import reducer from './reducer';

const key = 'home';

function Form({ value, onChangeActivities, onSubmitActivities }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <div>
      <Tabs defaultActiveKey="taxi" id="uncontrolled-tab-example">
        <p>acvc</p>
        <Tab eventKey="taxi" title="Taxi">
          <TaxiBookingForm />
          {/* <div>
            <Icon src={LocationIcon} />
            <Input value={value} onChange={onChangeActivities} />
            <Button>SEARCH</Button>
          </div> */}
        </Tab>
        <Tab eventKey="rental" title="Rental">
          <Icon src={LocationIcon} alt="icon-alt" />
          <Input value={value} onChange={onChangeActivities} />
          <Button>SEARCH</Button>
        </Tab>
        <Tab eventKey="rideSharing" title="Ride Sharing">
          <Icon src={LocationIcon} alt="icon-alt" />
          <Input value={value} onChange={onChangeActivities} />
          <Button>SEARCH</Button>
        </Tab>
        <Tab eventKey="activites" title="Activites">
          <div className="d-flex flex-column" style={{ flex: 1 }}>
            <div className="d-flex flex-row">
              <Icon src={LocationIcon} alt="icon-alt" />
              <Input value={value} onChange={onChangeActivities} />
            </div>
            <ActivitesList />
          </div>
          <Button onClick={onSubmitActivities}>SEARCH</Button>
        </Tab>
      </Tabs>
    </div>
  );
}

Form.propTypes = {
  value: PropTypes.string,
  onChangeActivities: PropTypes.func,
  onSubmitActivities: PropTypes.func,
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
)(Form);
