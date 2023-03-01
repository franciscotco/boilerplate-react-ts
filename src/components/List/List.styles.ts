import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-direction: row;
  gap: ${({ theme }): string => theme.spacing.s};
`;
