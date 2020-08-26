import styled from "styled-components";

export const StyledCard = styled.div<{ padding?: string }>`
  padding: ${({ theme, padding }) => padding || theme.spacers.size32};
  border-radius: ${({ theme }) => theme.display.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary10};
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};

  &.border {
    border: 1px solid ${({ theme }) => theme.colors.primary10};
  }

  &.shadow {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding: ${({ theme }) => theme.spacers.size16};
    &.shadow {
      box-shadow: ${({ theme }) => theme.clientBoxShadow};
    }
  }

  &.fullHeight {
    min-height: 100%;
  }
`;
