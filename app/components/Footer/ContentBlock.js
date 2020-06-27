import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 160px;
  margin-right: 30px;
`;
const Title = styled(Text)`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
`;
function BlockContent(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      {props.content.map(function render(item) {
        return <Text>{item}</Text>;
      })}
    </Wrapper>
  );
}
BlockContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
export default BlockContent;
