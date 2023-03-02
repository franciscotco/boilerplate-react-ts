import styled from "styled-components";

export const Select = styled.select`
  cursor: pointer;
  font-size: ${({ theme }): string => theme.font.size.regular};
  padding: ${({ theme }): string => `${theme.spacing.xs} ${theme.spacing.s}`};
`;
