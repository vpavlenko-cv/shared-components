import styled from 'styled-components';
import get from 'extensions/themeGet';
import tag from 'clean-tag';
import userTextSpacing from 'extensions/userTextSpacing';

const AlertBorder = styled(tag.div).attrs({
  spacing: userTextSpacing.withLineHeight(0),
})`
  padding: ${get('spacing.small')} ${get('spacing.medium')};
  font-weight: 200;
  border-width: ${get('thicknesses.normal')};
  border-style: solid;
  width: auto;
  font-size: 14px;
  line-height: 1.5em;
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 53px;
  letter-spacing: 0.02em;
  margin: ${props => props.spacing};

  background: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return get('colors.positive.light');
      case 'error':
        return get('colors.negative.light');
      default:
        return get('colors.primary.light');
    }
  }};

  border-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return get('colors.positive.border');
      case 'error':
        return get('colors.negative.border');
      default:
        return get('colors.primary.border');
    }
  }};

  color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return get('colors.positive.dark');
      case 'error':
        return get('colors.negative.dark');
      default:
        return get('colors.primary.dark');
    }
  }};
`;

AlertBorder.Small = styled(AlertBorder)`
  padding: 5px;
  font-size: 0.8em;
  min-height: 30px;
  font-weight: 300;
`;

export default AlertBorder;
