import styled from 'styled-components';
import get from 'extensions/themeGet';

const AccordionContent = styled.div`
  padding: ${get('spacing.large')};
  padding-top: 0;
  display: flex;
  flex-direction: column;
`;

export default AccordionContent;
