import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import NormalImg from 'components/Img';
import Text from './Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  width: 225px;
  margin-right: 30px;
  margin: 4px;
`;
const Icon = styled(NormalImg)`
  display: block;
  height: 20px;
  margin-right: 10px;
`;

function InfoContent(props) {
  return (
    <Wrapper>
      <Icon src={props.src} alt="icon-content" />
      <Text>{props.content}</Text>
    </Wrapper>
  );
}
InfoContent.propTypes = {
  src: PropTypes.string,
  content: PropTypes.string,
};
export default InfoContent;
