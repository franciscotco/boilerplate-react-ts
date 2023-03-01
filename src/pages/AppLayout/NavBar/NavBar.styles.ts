import styled, { css, type FlattenSimpleInterpolation } from "styled-components";

export const Root = styled.div`
  width: 100%;
  min-height: 8rem;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 8rem;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0 0.75rem 0 rgba(0, 0, 0, 0.05);
  background: ${({ theme }): string => theme.color.white};
  font-size: ${({ theme }): string => theme.font.size.large};

  padding: ${({ theme }): string => `${theme.spacing.l} ${theme.spacing.xl}`};
`;

export const RouteLink = styled.a`
  color: ${({ theme }): string => theme.color.black};

  &[aria-current] {
    color: ${({ theme }): string => theme.color.blue};
  }
`;

export const SupportedLanguage = styled.li<{ isActive: boolean }>`
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;

  ${({ isActive, theme }): FlattenSimpleInterpolation | false =>
    isActive &&
    css`
      color: ${theme.color.blue};
    `}
`;
