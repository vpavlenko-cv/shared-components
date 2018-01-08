import styled from 'styled-components';
import get from 'extensions/themeGet';
import icons from 'components/Icon/icons';
import AlertBorder from './AlertBorder';

export const SIZE = '31px';
const SMALL_SIZE = '18px';

const getAlertIcon = size => styled.i`
  width: ${size};
  height: ${size};
  display: inline-block;
  border-color: inherit;

  &::before {
    content: ${({ type }) => {
      switch (type) {
        case 'success':
          return `"${icons('checkmark')}"`;
        case 'error':
          return '"!"';
        default:
          return '"i"';
      }
    }};

    box-sizing: border-box;
    border-width: ${get('thicknesses.normal')};
    border-style: solid;
    border-color: inherit;

    background: ${get('colors.background.default')};
    width: ${size};
    height: ${size};
    display: inline-block;
    line-height: ${size};
    font-family: ${props => {
      switch (props.type) {
        case 'success':
          return get('fonts.icon');
        case 'error':
        default:
          return get('fonts.brand');
      }
    }};
    text-align: center;
    border-radius: 100%;
    font-size: 1em;
    position: absolute;
    font-style: normal;
  }

  ${AlertBorder} > & {
    margin: 0 10px auto 0;
    flex: 0 0 auto;
  }
`;

const AlertIcon = getAlertIcon(SIZE);
AlertIcon.Small = getAlertIcon(SMALL_SIZE).extend`
  
  ${AlertBorder.Small} > & {
    margin: 0 5px auto 0;
  }
`;

export default AlertIcon;
