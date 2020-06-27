import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { createStructuredSelector } from 'reselect';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Calendar from 'react-calendar';
import saga from './saga';
import reducer from './reducer';
import {
  changeOrigin,
  changeDestination,
  changeDepartDate,
  changePassenger,
  onSearchTaxiBooking,
} from './actions';
import Button from './Button';
import Img from './location.png';
import NormalIcon from './Icon';
import {
  makeSelectOrigin,
  makeSelectDestination,
  makeSelectDepartDate,
  makeSelectPassenger,
} from './selectors';
import { formatDate } from '../../helper/Converter';
import 'react-calendar/dist/Calendar.css';
import 'react-google-places-autocomplete/dist/index.min.css';
import './TaxiBookingForm.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const key = 'home';

function TaxiBookingForm({
  origin,
  destination,
  departDate,
  passenger,
  onChangeDepartDate,
  onChangeOrigin,
  onChangeDestination,
  onChangePassenger,
  onSearch,
}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [originModalShow, setOriginModalShow] = React.useState(false);
  const [destinationModalShow, setDestinationModalShow] = React.useState(false);
  const [passengersModalShow, setPassengersModalShow] = React.useState(false);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Wrapper>
      <Col xl>
        <LargeSection>
          <Icon src={Img} alt="icon-alt" />
          <Main style={{ flex: 1 }} onClick={() => setOriginModalShow(true)}>
            <Title>Origin</Title>
            <Content>{origin.description}</Content>
          </Main>
          <Main
            style={{ marginRight: 20 }}
            onClick={() => setDestinationModalShow(true)}
          >
            <Title>Destination</Title>
            <Content>{destination.description}</Content>
          </Main>
          <OriginModal
            show={originModalShow}
            onHide={() => setOriginModalShow(false)}
            onChange={onChangeOrigin}
            initialValue={origin.description}
          />
          <DestinationModal
            show={destinationModalShow}
            onHide={() => setDestinationModalShow(false)}
            onChange={onChangeDestination}
            initialValue={destination.description}
          />
        </LargeSection>
      </Col>
      <SmallSection>
        <Icon src={Img} alt="icon-alt" />
        <Main onClick={() => setModalShow(true)}>
          <Title>Depart date</Title>
          <Content>{departDate ? formatDate(departDate) : 'dd/mm/yy'}</Content>
        </Main>
        <TimeModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onChange={onChangeDepartDate}
          defaultValue={departDate || new Date()}
        />
      </SmallSection>
      <SmallSection>
        <Icon src={Img} alt="icon_alt" />
        <Main onClick={() => setPassengersModalShow(true)}>
          <Title>Passengers/Car</Title>
          <Content>{passenger} passenger(s)</Content>
        </Main>
        <PassengersModal
          show={passengersModalShow}
          onHide={() => setPassengersModalShow(false)}
          passenger={passenger}
          onChange={onChangePassenger}
        />
      </SmallSection>
      <Button onClick={onSearch}>SEARCH</Button>
    </Wrapper>
  );
}

TaxiBookingForm.propTypes = {
  origin: PropTypes.object,
  destination: PropTypes.object,
  departDate: PropTypes.object,
  passenger: PropTypes.number,
  onChangeDepartDate: PropTypes.func,
  onChangeOrigin: PropTypes.func,
  onChangeDestination: PropTypes.func,
  onChangePassenger: PropTypes.func,
  onSearch: PropTypes.func,
};

function OriginModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <GooglePlacesAutocomplete
          initialValue={props.initialValue}
          onSelect={value => {
            props.onChange(value);
          }}
        />
      </Modal.Body>
    </Modal>
  );
}

OriginModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
};

function DestinationModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <GooglePlacesAutocomplete
          initialValue={props.initialValue}
          onSelect={props.onChange}
        />
      </Modal.Body>
    </Modal>
  );
}

DestinationModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
};

function TimeModal(props) {
  const [timeModalShow, setTimeModalShow] = React.useState(false);
  const [departTime, setDepartTime] = React.useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Calendar
          defaultValue={props.defaultValue}
          onClickDay={date => {
            setTimeModalShow(true);
            setDepartTime(date);
          }}
        />
        <Modal
          show={timeModalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={() => setTimeModalShow(false)}
        >
          <Modal.Body style={{ height: 400 }}>
            <DatePicker
              autoFocus
              selected={departTime}
              onChange={date => {
                props.onChange(date);
                setTimeModalShow(false);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              timeFormat="HH:mm"
              dateFormat="HH:mm"
              open
              customInput={<></>}
            />
          </Modal.Body>
        </Modal>
      </Modal.Body>
    </Modal>
  );
}

TimeModal.propTypes = {
  onHide: PropTypes.func,
  onChange: PropTypes.func,
  defaultValue: PropTypes.object,
};

function PassengersModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ maxHeight: 400, overflowY: 'scroll', padding: 0 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          passengerValue => (
            <PassengerOption
              key={passengerValue}
              isActive={passengerValue === props.passenger}
              onClick={() => {
                props.onChange(passengerValue);
                props.onHide();
              }}
            >
              <span>
                {passengerValue} passenger{passengerValue === 1 ? '' : 's'}
              </span>
            </PassengerOption>
          ),
        )}
      </Modal.Body>
    </Modal>
  );
}
PassengersModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  passenger: PropTypes.number,
  onChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  origin: makeSelectOrigin(),
  destination: makeSelectDestination(),
  departDate: makeSelectDepartDate(),
  passenger: makeSelectPassenger(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeOrigin: value => {
      if (value.description) {
        dispatch(changeOrigin(value));
      }
    },
    onChangeDestination: value => {
      if (value.description) {
        dispatch(changeDestination(value));
      }
    },
    onChangeDepartDate: value => dispatch(changeDepartDate(value)),
    onChangePassenger: value => dispatch(changePassenger(value)),
    onSearch: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(onSearchTaxiBooking());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaxiBookingForm, OriginModal, TimeModal);

const Wrapper = styled(Row)`
  height: 100px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  margin: 0px;
`;

const Icon = styled(NormalIcon)`
  width: 30px;
  padding: 35px 0px;
  margin: 0px 10px;
`;
const LargeSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  max-width: 500px;
`;

const SmallSection = styled(LargeSection)`
  flex-grow: 1;
  border-left: 1.5px solid #eaeaea;
  background-color: #ffffff;
  padding 0px 10px;
  max-width: 234px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
  max-width: 200px;
`;
const Title = styled.span`
  font-family: 'Open Sans';
  font-size: 15px;
  color: #333333;
`;
const Content = styled.span`
  font-family: 'Open Sans';
  font-size: 17px;
  font-weight: 600;
  color: #77a300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const PassengerOption = styled.div`
  background-color: ${props => (props.isActive ? '#77a300' : null)};
  font-family: 'Open Sans';
  padding: 15px 20px;
  border-bottom: 1px solid rgb(232, 232, 232);
`;
