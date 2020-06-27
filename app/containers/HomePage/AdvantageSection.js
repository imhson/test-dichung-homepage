import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Img from '../../images/instagram.png';

export default function AdvantageSection() {
  return (
    <Wrapper>
      <AdvantageRow>
        <Col lg>
          <Advantage
            src={Img}
            title="Đảm bảo giá tốt"
            content="Dịch vụ đi ghép xe giá siêu rẻ"
          />
        </Col>
        <Col lg>
          <Advantage
            src={Img}
            title="Cam kết chất lượng"
            content="Hoàn tiền nếu không hài lòng"
          />
        </Col>
        <Col lg>
          <Advantage
            src={Img}
            title="Phong cách sống xanh"
            content="Hình thức di chuyển thân thiện môi trường"
          />
        </Col>
      </AdvantageRow>
    </Wrapper>
  );
}
function Advantage(props) {
  return (
    <AdvantageWrapper>
      <AdvantageIcon src={props.src} alt="icon" />
      <div>
        <AdvantageTitle>{props.title}</AdvantageTitle>
        <P>{props.content}</P>
      </div>
    </AdvantageWrapper>
  );
}
Advantage.propTypes = {
  src: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
};

const Wrapper = styled.div`
  background-color: #fcfcfd;
  display: flex;
`;

const AdvantageWrapper = styled.div`
  height: 161px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdvantageIcon = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 30px;
`;

const P = styled.p`
  font-family: 'Open Sans';
  margin: 0px;
  font-size: 12px;
`;

const AdvantageTitle = styled(P)`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 11px;
`;

const AdvantageRow = styled(Row)`
  flex: 1;
  margin: 0px;
`;
