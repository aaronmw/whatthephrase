import styled from 'styled-components';
import Button from './Button';

const HeaderButton = styled(Button).attrs({
  tapSound: 'woosh'
})`
  position: absolute;
  width: 12vw;
  height: 12vw;
  background: transparent;
  ${props => !props.isVisible && `transform: translateY(-100%);`}
`;

export default HeaderButton;
