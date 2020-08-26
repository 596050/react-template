import styled, { css } from 'styled-components'

const hideOnBreakpoint = css`
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    display: none;
  }
`

export const StyledDrawer = styled.div`
  ${hideOnBreakpoint}
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  width: 0;
  height: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: 0.25s;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.primary10};
  transform: translateX(-100%);

  &.open {
    width: 250px;
    @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      transform: translateX(-0%);
    }
  }
`

export const StyledBackdrop = styled.div`
  ${hideOnBreakpoint}
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 50%;
  &.open {
    width: 100%;
  }
`

export const ContentPadding = styled.div`
  height: ${({ theme }) => theme.spacers.size64};
`
