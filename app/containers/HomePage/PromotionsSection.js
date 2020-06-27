import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import Img from '../../images/harvest.jpg';
import Title from './Title';

export default function PromotionsSection() {
  return (
    <Wrapper>
      <Title>Promotions</Title>
      <Container style={{ maxWidth: 1250 }}>
        <Row className="justify-content-center">
          <Col xl className="w-auto">
            <Promotion
              src={Img}
              location="Hanoi"
              title="Get 20% off on all shared taxi rides"
              time="4 months ago"
              code="2019_NOW"
              num={2}
            />
          </Col>
          <Col xl className="w-auto">
            <Promotion
              src={Img}
              location="Hanoi"
              title="Get 20% off on all shared taxi rides"
              time="4 months ago"
              code="2019_NOW"
              num={2}
            />
          </Col>
          <Col xl className="w-auto">
            <Promotion
              src={Img}
              location="Hanoi"
              title="Get 20% off on all shared taxi rides"
              time="4 months ago"
              code="2019_NOW"
              num={2}
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
function Promotion(props) {
  return (
    <PromotionWrapper>
      <PromotionImage src={props.src}>
        <Button type="button">Shared Ride</Button>
        <Code>{props.code}</Code>
      </PromotionImage>
      <Content>
        <P>{props.location}</P>
        <PromotionTitle>{props.title}</PromotionTitle>
        <P>{props.time}</P>
        <PromotionNum>♜ {props.num}</PromotionNum>
      </Content>
    </PromotionWrapper>
  );
}

Promotion.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  code: PropTypes.string,
  num: PropTypes.number,
};

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
`;
const PromotionWrapper = styled.div`
  align-items: center;
  justify-content: center;
  width: 348.5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 47px;
`;
const PromotionImage = styled.div`
  width: 348.5px;
  height: 244px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 21px;
  background-image: url(${props => props.src});
`;

const Button = styled.button`
  border: none;
  background-color: #77a300;
  color: white;
  font-size: 9px;
  padding: 8px;
  font-family: Helvetica;
  width: 75px;
`;

const Code = styled.span`
  background-color: white;
  color: #77a300;
  font-size: 12px;
  padding: 6px 14px;
  align-self: start;
  font-family: Helvetica, sans-serif;
`;

const Content = styled.div`
  padding: 0px 23px;
`;

const P = styled.p`
  font-size: 10.8px;
  margin: 20px 0px;
  font-family: Helvetica;
`;

const PromotionTitle = styled(P)`
  font-size: 15.4px;
`;

const PromotionNum = styled(P)`
  font-size: 12.3px;
  padding-bottom: 12px;
`;
