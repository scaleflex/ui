import styled from 'styled-components';

const Container = styled.div`
  width: ${({ fullWidth }: { fullWidth: boolean }) => (fullWidth ? '100%' : '300px')};
`;

const NoSearchResultsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 40px 0;
  color: #768A9F;

  svg {
    color: #DFE7ED;
  }
`;

const OptionLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const OptionLabelIconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const Styled = {
  Container,
  NoSearchResultsContainer,
  OptionLabel,
  OptionLabelIconWrapper,
};

export default Styled;
