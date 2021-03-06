import styled, { css } from 'styled-components';
import get from 'extensions/themeGet';
import cssvars from 'themes/cssvars';

export default styled.div`
  font-family: ${get('fonts.default')};
  background: ${get('colors.background.default')};
  color: ${get('colors.text.default')};
  font-size: ${get('fontSizes.default')};
  line-height: 1.5;
  letter-spacing: 0.28px;

  width: 100%;
  height: 100%;
`;
