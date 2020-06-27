import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export default function AdsSection(props) {
  return (
    <Wapper>
      <Row style={{ flex: 1 }}>
        <TextCol xl={9}>
          <Title>{props.title}</Title>
          <Content>{props.content}</Content>
        </TextCol>
        <ButtonCol xl={3}>
          <Button>{props.buttonContent}</Button>
        </ButtonCol>
      </Row>
    </Wapper>
  );
}

const Wapper = styled.div`
  background-color: #f3f5f7;
  display: flex;
  padding: 0px 14%;
`;
const TextCol = styled(Col)`
  flex-direction: column;
  display: flex;
  flex: 1;
  justify-content: center;
`;
const ButtonCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.span`
  height: 30px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-bottom: 15px;
  margin-top: 50px;
`;

const Content = styled.span`
  height: 22px;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-bottom: 50px;
`;

const Button = styled.button`
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  color: #ffffff;
  background-color: #77a300;
  border: none;
  height: 46px;
  width: auto;
  padding: 0px 10px;
  margin: 20px 0px;
`;

AdsSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  buttonContent: PropTypes.string,
};
