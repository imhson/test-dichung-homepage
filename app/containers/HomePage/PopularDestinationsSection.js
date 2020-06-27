import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Title from './Title';
import Img from './hoian.jpg';

export default function PopDesSection() {
  return (
    <Wapper>
      <Title>Popular Destinations</Title>
      <Row className="justify-content-md-center m-0">
        <SmallItem src={Img} name="Hoi An" offers={3} />
        <LargeItem src={Img} name="Hoi An" offers={3} />
      </Row>
      <Row className="justify-content-md-center m-0">
        <LargeItem src={Img} name="Hoi An" offers={3} />
        <SmallItem src={Img} name="Hoi An" offers={3} />
      </Row>
    </Wapper>
  );
}

function SmallItem(props) {
  return (
    <Col xl="auto" className="p-0">
      <SmallWapper src={props.src}>
        <Name>{props.name}</Name>
        <Offers>{props.offers} offers</Offers>
      </SmallWapper>
    </Col>
  );
}

function LargeItem(props) {
  return (
    <Col xl="auto" className="p-0">
      <LargeWapper src={props.src} href="fb.com">
        <Name>{props.name}</Name>
        <Offers>{props.offers} offers</Offers>
      </LargeWapper>
    </Col>
  );
}
SmallItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  offers: PropTypes.number,
};
LargeItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  offers: PropTypes.number,
};
const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 130px;
`;
const SmallWapper = styled.a`
  background-image: url(${props => props.src});
  display: flex;
  flex-direction: column;
  height: 331px;
  width: 368px;
  margin: 13px;
  padding-left: 29px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    color: transparent;
  }
`;
const LargeWapper = styled(SmallWapper)`
  width: 760px;
`;
const Name = styled.span`
  font-family: Helvetica;
  font-size: 25.6px;
  letter-spacing: 2.4px;
  color: #ffffff;
  margin-top: 260px;
`;
const Offers = styled.span`
  font-family: Helvetica;
  font-size: 14.4px;
  color: #ffffff;
`;
