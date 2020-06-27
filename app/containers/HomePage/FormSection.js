import styled from 'styled-components';
import Section from './Section';
import backgroundImage from './background.jpg';

const FormSection = styled(Section)`
  height: 674px;
  background-image: url(${backgroundImage});
  background-size: cover;
  padding-top: 215px;
  padding-left: 10%;
`;

export default FormSection;
